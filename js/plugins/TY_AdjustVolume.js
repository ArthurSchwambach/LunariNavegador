 /*:
 * @plugindesc v1.0 Adjust Volume
 * @author Toby Yasha
 * @param Adjust Volume
 * @type number
 * @desc By how much should the volume go up/down [Default: 20]
 * @default 20
 * @help
 *
 * ---------------------------------------------------------------------------------------
 * Hope this helped you!
 *
*/

var Toby_Yasha = Toby_Yasha || {};


Toby_Yasha.Parameters = PluginManager.parameters('TY_AdjustVolume');
Toby_Yasha.Param = Toby_Yasha.Param || {};

Toby_Yasha.Param.AdjustVolume = Number(Toby_Yasha.Parameters['Adjust Volume']);


Toby_Yasha.Window_Options_volumeOffset = Window_Options.prototype.volumeOffset
Window_Options.prototype.volumeOffset = function() {
    return Toby_Yasha.Param.AdjustVolume;
};