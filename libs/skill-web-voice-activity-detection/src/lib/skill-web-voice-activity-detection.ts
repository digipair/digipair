/* eslint-disable @typescript-eslint/no-unused-vars */
import { PinsSettings, executePinsList } from '@digipair/engine';

// add a script tag to the document
async function addScript(src: string) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.body.appendChild(script);

  return new Promise(resolve => {
    script.onload = resolve;
  });
}

class VADService {
  async listen(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const globalInstance: any = typeof window === 'undefined' ? global : window;
    const config = globalInstance.__DIGIPAIR_CONFIG__;
    const {
      stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          autoGainControl: true,
          noiseSuppression: true,
        },
      }),
      onFrameProcessed = [],
      onVADMisfire = [],
      onSpeechStart = [],
      onSpeechEnd = [],
      model = 'legacy',
      additionalAudioConstraints = {},
      baseAssetPath = `${config.BASE_URL}/@ricky0123/vad-web@0.0.22/dist/`,
      onnxWASMBasePath = `${config.BASE_URL}/onnxruntime-web@1.18.0/dist/`,
      submitUserSpeechOnPause = false,
      positiveSpeechThreshold = 0.5,
      negativeSpeechThreshold = 0.35,
      preSpeechPadFrames = 1,
      redemptionFrames = 8,
      frameSamples = 1536,
      minSpeechFrames = 3,
    } = params;

    if (!document.querySelector(`script[src="${onnxWASMBasePath}ort.js"]`)) {
      await addScript(`${onnxWASMBasePath}ort.js`);
    }

    if (!document.querySelector(`script[src="${baseAssetPath}bundle.min.js"]`)) {
      await addScript(`${baseAssetPath}bundle.min.js`);
    }

    const { MicVAD, utils } = (window as any)['vad'];

    const vad = await MicVAD.new({
      stream,
      onFrameProcessed: (probabilities: any, frame: Float32Array) => {
        executePinsList(onFrameProcessed, { ...context, probabilities, frame, vad });
      },
      onVADMisfire: () => {
        executePinsList(onVADMisfire, { ...context, vad });
      },
      onSpeechStart: () => {
        executePinsList(onSpeechStart, { ...context, vad });
      },
      onSpeechEnd: (buffer: any) => {
        const wavBuffer = utils.encodeWAV(buffer);
        const base64 = utils.arrayBufferToBase64(wavBuffer);
        const audio = `data:audio/wav;base64,${base64}`;

        executePinsList(onSpeechEnd, { ...context, audio, vad });
      },
      additionalAudioConstraints,
      positiveSpeechThreshold,
      negativeSpeechThreshold,
      redemptionFrames,
      frameSamples,
      preSpeechPadFrames,
      minSpeechFrames,
      model,
      baseAssetPath,
      onnxWASMBasePath,
      submitUserSpeechOnPause,
    });

    return vad;
  }

  async start(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { vad = context.vad } = params;

    return vad.start();
  }

  async pause(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { vad = context.vad } = params;

    return vad.pause();
  }

  async destroy(params: any, _pinsSettingsList: PinsSettings[], context: any): Promise<any> {
    const { vad = context.vad } = params;

    return vad.destroy();
  }
}

export const listen = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new VADService().listen(params, pinsSettingsList, context);

export const start = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new VADService().start(params, pinsSettingsList, context);

export const pause = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new VADService().pause(params, pinsSettingsList, context);

export const destroy = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new VADService().destroy(params, pinsSettingsList, context);
