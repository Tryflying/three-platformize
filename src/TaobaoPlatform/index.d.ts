export class TaobaoPlatform {
  constructor(canvas: any);

  getGlobals(): {
    atob: Function;
    Blob: Function;
    window: Object;
    document: Object;
    HTMLCanvasElement: undefined;
    XMLHttpRequest: Function;
    requestAnimationFrame: Function;
    OffscreenCanvas: Function;
  };

  dispose(): void;

  enableDeviceOrientation(interval?: 'normal' | 'game' | 'ui'): void;
  disableDeviceOrientation(): void;
}
