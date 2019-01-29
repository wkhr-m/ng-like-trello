import { Board1Module } from './board-1.module';

describe('Board1Module', () => {
  let board1Module: Board1Module;

  beforeEach(() => {
    board1Module = new Board1Module();
  });

  it('should create an instance', () => {
    expect(board1Module).toBeTruthy();
  });
});
