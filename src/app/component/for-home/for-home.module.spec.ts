import { ForHomeModule } from './for-home.module';

describe('ForHomeModule', () => {
  let forHomeModule: ForHomeModule;

  beforeEach(() => {
    forHomeModule = new ForHomeModule();
  });

  it('should create an instance', () => {
    expect(forHomeModule).toBeTruthy();
  });
});
