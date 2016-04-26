/**
 * @jsx React.DOM
 */


var TapEventMixin = {
  Tap_onTouchStart: function(event) {
    this.hasTouch = true;

    var target = event.target,
        touchStart = event.touches[0];

    this.touchStartX = touchStart.pageX;
        this.touchStartY = touchStart.pageY;

    // Remove the tap and move handlers if the timeout expires
    this.isTouched = true;
    this.touchTimeout = setTimeout(this.Tap_touchInvalidated, 500);
  },
  Tap_onTouchMove: function(event) {

    var touchMove = event.touches[0],
    moveX = touchMove.pageX,
    moveY = touchMove.pageY;

    if (Math.abs(moveX - this.touchStartX) > 10 || Math.abs(moveY - this.touchStartY) > 10) {
      this.Tap_touchInvalidated();
    }

  },
  Tap_onTouchEnd: function(event) {
    if(!this.isTouched) return;

    this.Tap_touchInvalidated();

    arguments[0].apply(this, Array.prototype.slice.call(arguments).slice(1));
  },
  Tap_onClick: function() {
    if(this.hasTouch) return;

    arguments[0].apply(this, Array.prototype.slice.call(arguments).slice(1));
  },
  Tap_touchInvalidated: function() {
    this.isTouched = false;
    clearTimeout(this.touchTimeout);
  }
};

module.exports = TapEventMixin;
