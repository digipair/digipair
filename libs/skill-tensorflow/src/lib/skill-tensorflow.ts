import { PinsSettings } from '@digipair/engine';
import * as tf from '@tensorflow/tfjs-node';
import * as cocoSsdModel from '@tensorflow-models/coco-ssd';
import * as faceDetectionModel from '@tensorflow-models/face-detection';
import { MediaPipeFaceDetectorMediaPipeModelConfig } from '@tensorflow-models/face-detection';

class TensorflowService {
  private async base64ToImage(base64: string) {
    const data = base64.replace(/^data:image\/\w+;base64,/, '');
    const buffer = Buffer.from(data, 'base64');
    return buffer
  };

  async cocoSsd(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { image, base = 'lite_mobilenet_v2', modelUrl } = params;

    const model = await cocoSsdModel.load({
      base,
      modelUrl
    });
    const imageLoaded = await this.base64ToImage(image);
    const imageData = tf.node.decodeImage(imageLoaded, 3);
    const predictions = await model.detect(imageData as any);

    return predictions;
  }

  async faceDetection(params: any, _pinsSettingsList: PinsSettings[], _context: any) {
    const { image, runtime = 'mediapipe' } = params;

    const model = faceDetectionModel.SupportedModels.MediaPipeFaceDetector;
    const imageLoaded = await this.base64ToImage(image);
    const imageData = tf.node.decodeImage(imageLoaded, 3);
    const detectorConfig: MediaPipeFaceDetectorMediaPipeModelConfig = {
      runtime, // 'mediapipe' or 'tfjs'
    }
    const detector = await faceDetectionModel.createDetector(model, detectorConfig);
    const faces = await detector.estimateFaces(imageData as any);

    return faces;
  }
}

export const cocoSsd = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TensorflowService().cocoSsd(params, pinsSettingsList, context);

export const faceDetection = (params: any, pinsSettingsList: PinsSettings[], context: any) =>
  new TensorflowService().faceDetection(params, pinsSettingsList, context);
