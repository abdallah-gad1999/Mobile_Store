import { PipeDatePipe } from './pipe-date.pipe';

describe('PipeDatePipe', () => {
  it('create an instance', () => {
    const pipe = new PipeDatePipe();
    expect(pipe).toBeTruthy();
  });
});
