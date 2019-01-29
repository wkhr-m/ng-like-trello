import { Board2Module } from './board-2.module';

describe('Board2Module', () => {
  let board2Module: Board2Module;

  beforeEach(() => {
    board2Module = new Board2Module();
  });

  it('should create an instance', () => {
    expect(board2Module).toBeTruthy();
  });
});
