/*:
* @plugindesc Rewrite pictures function by sacrificing accuracy and potential for smooth execution and user convenience.
* @author Kuro DCupu
*
* @help Pictures Alternative v1.0
===================================
Released date : 01/04/2020

- Show Picture gradually fade in the picture
- Move Picture gradually slowed down the picture
- Erase Picture gradually fade out the picture
- Rotate Picture "rotate" instead of "spin"
- Input X and Y coordinate treated as screen size percentage instead of constant pixel value

*/

Speed = 20;
GridX = 100;
GridY = 100;

Game_Picture_show = Game_Picture.prototype.show;
Game_Picture_move = Game_Picture.prototype.move;

Game_Picture.prototype.show = function(name, origin, x, y, scaleX, scaleY, opacity, blendMode) {
    Game_Picture_show.call(this, name, origin, x, y, scaleX, scaleY, opacity, blendMode);
    this._x = x * Graphics.width / GridX;
    this._y = y * Graphics.height / GridY;
    this._opacity = 0;
    this.move(origin, x, y, scaleX, scaleY, opacity, blendMode, Speed);
};

Game_Picture.prototype.move = function(origin, x, y, scaleX, scaleY, opacity, blendMode, duration) {
    Game_Picture_move.call(this, origin, x, y, scaleX, scaleY, opacity, blendMode, duration);
    this._targetX = x * Graphics.width / GridX;
    this._targetY = y * Graphics.height / GridY;
    this._duration = Speed;
};

Game_Picture.prototype.updateMove = function() {
    var d = this._duration;
    this._x = (this._x * (d - 1) + this._targetX) / d;
    this._y = (this._y * (d - 1) + this._targetY) / d;
    this._scaleX  = (this._scaleX  * (d - 1) + this._targetScaleX)  / d;
    this._scaleY  = (this._scaleY  * (d - 1) + this._targetScaleY)  / d;
    this._opacity = (this._opacity * (d - 1) + this._targetOpacity) / d;
};

Game_Picture.prototype.erase = function() {
    Game_Picture_move.call(this, this._origin, this._x, this._y, this._scaleX, this._scaleY, 0, this._blendMode, Speed);
};

Game_Screen.prototype.erasePicture = function(pictureId) {
    var picture = this.picture(pictureId);
    if (picture) {
        picture.erase();
    }
};

Game_Picture.prototype.initRotation = function() {
    this._angle = 0;
    this._rotationSpeed = 0;
};

Game_Picture.prototype.rotate = function(speed) {
    this._rotationSpeed += speed;
};

Game_Picture.prototype.updateRotation = function() {
    this._angle = (this._angle * (Speed - 1) + this._rotationSpeed) / Speed;
};