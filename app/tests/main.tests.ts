import MoviesViewModel from '../scripts/main.ts';
import { expect } from 'chai';

describe('something', () => {
  it('should work', () => {
    expect(true).to.be.equal(false);
  })

  it('can add', () => {
     var moviesViewModel = new MoviesViewModel();
     expect(moviesViewModel.add(3, 4)).to.be.equal(7);
  })
});