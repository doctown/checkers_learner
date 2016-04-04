describe('checkers', function() {
  it('should have an object named `app`', function() {
    expect(app).to.be.an('object');
  });

  describe('init', function() {
    it('should have a method called init', function() {
      expect(true).to.equal(true);
    });

  });

  describe('model', function() {

    before(function() {
      app.init();
    });

    beforeEach(function() {
      piece = new Piece({color: red, cur_pos: {x: 0, y: 0}})
    });

    describe('piece', function() {
      it('should be set to initial color, position, and state', function() {
        expect(this.get('color')).to.equal('red');
        expect(this.get('state')).to.equal('single');
        expect(this.get('cur_pos')).to.deep.equal({x: 0, y: 0});
      });
    });

    describe('board', function() {
      it('should happen when clicked', function() {
      });
    });

    describe('game', function() {
      it('should happen when clicked', function() {
      });
    });
  });

  describe('behavior', function() {

    before(function() {
      app.init();
    });

    beforeEach(function() {
    });

    describe('another behavior', function() {
      it('should do this', function() {
        expect(true).to.equal(true);
      });
    });

    describe('events', function() {
      it('should happen when clicked', function() {
      });
    });
  });

  describe('view', function() {

    before(function() {
      app.init();
    });

    beforeEach(function() {
    });

    describe('behavior', function() {
      it('should do this', function() {
        expect(true).to.equal(true);
      });
    });

    describe('events', function() {
      it('should happen when clicked', function() {
      });
    });
  });

});
