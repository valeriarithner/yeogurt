'use strict';

import Pais from '../pais';

describe('Pais View', function() {

  beforeEach(() => {
    this.pais = new Pais();
  });

  it('Should run a few assertions', () => {
    expect(this.pais);
  });

});
