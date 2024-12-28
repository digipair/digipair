import { html, LitElement } from 'lit';
import { customElement, query, property } from 'lit/decorators.js';

@customElement('digipair-heygen')
export class Heygen extends LitElement {
  @property()
  videoStyle = '';

  @query('video') mediaElement!: HTMLVideoElement;

  private peerConnection!: RTCPeerConnection;

  private updateStatus(status: string, data?: any) {
    this.dispatchEvent(new CustomEvent('status', { detail: { status, data } }));
  }

  async start(sessionInfo: any) {
    this.updateStatus('SESSION_CREATING');

    // call the new interface to get the server's offer SDP and ICE server to create a new RTCPeerConnection
    const { sdp: serverSdp, ice_servers2: iceServers } = sessionInfo;

    // Create a new RTCPeerConnection
    this.peerConnection = new RTCPeerConnection({ iceServers: iceServers });

    // When audio and video streams are received, display them in the video element
    this.peerConnection.ontrack = event => {
      if (event.track.kind === 'audio' || event.track.kind === 'video') {
        this.mediaElement.srcObject = event.streams[0];
      }
    };

    // When receiving a message, display it in the status element
    this.peerConnection.ondatachannel = (event: any) => {
      const dataChannel = event.channel;
      dataChannel.onmessage = (message: any) => {
        this.dispatchEvent(new CustomEvent('message', { detail: { message: message.data } }));
      };
    };

    // Set server's SDP as remote description
    const remoteDescription = new RTCSessionDescription(serverSdp);
    await this.peerConnection.setRemoteDescription(remoteDescription);

    this.updateStatus('SESSION_CREATED');

    // Create and set local SDP description
    const localDescription = await this.peerConnection.createAnswer();
    await this.peerConnection.setLocalDescription(localDescription);

    // When ICE candidate is available, send to the server
    this.peerConnection.onicecandidate = ({ candidate }) => {
      if (candidate) {
        this.dispatchEvent(
          new CustomEvent('icecandidate', {
            detail: { sessionId: sessionInfo.session_id, candidate: candidate.toJSON() },
          }),
        );
      }
    };

    // When ICE connection state changes, display the new state
    this.peerConnection.oniceconnectionstatechange = (event: any) => {
      this.updateStatus('ICE_CONNECTION_STATE_CHANGED', this.peerConnection.iceConnectionState);
    };

    var receivers = this.peerConnection.getReceivers();

    receivers.forEach((receiver: any) => {
      receiver.jitterBufferTarget = 500;
    });

    this.updateStatus('SESSION_STARTED');

    // Return the local SDP to the server
    return { sessionId: sessionInfo.session_id, sdp: localDescription };
  }

  async stop() {
    this.peerConnection.close();
    this.updateStatus('SESSION_STOPPED');
  }

  override render() {
    return html` <video style=${this.videoStyle} autoplay></video> `;
  }
}
