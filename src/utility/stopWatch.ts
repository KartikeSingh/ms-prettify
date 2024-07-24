export default class stopWatch {
  startedAt: number;
  lastStart: number;
  pausedAt: number = 0;
  endedAt: number = 0;
  records: number[] = [];
  paused: boolean = false;

  constructor() {
    this.startedAt = Date.now();
    this.lastStart = this.startedAt;
  }

  isEnded() {
    return this.endedAt !== 0;
  }

  isRunning() {
    return !this.paused;
  }

  isPaused() {
    return this.paused;
  }

  pause() {}
}
