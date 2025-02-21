// ---------------------------------------------------------------------------------------
// Bishiba's and Toby Yasha's fix for YEP_EventChasePlayer + Qmovement
// BISH_TY_Chase_Qmove_FIX.js
// Version 1.4
// ---------------------------------------------------------------------------------------
 
 
 /*:
 * @param ---Plugin Version 1.4---
 * @plugindesc Compatibility fix for YEP_EventChasePlayer + Qmovement.
 * Allows the events to chase the player on other gridsizes.
 * @author Bishiba, Toby Yasha
 *
 * @param Updates Per Second
 * @type number
 * @max 60
 * @min 0.01
 * @desc This is how many times per second the event will update
 * its direction toward the player.[Range: 1 - 60][Default: 12]
 * @default 12
 *
 * @param Adjust Event Movement
 * @type number
 * @decimals 2
 * @desc Multiplies x and y coordinates with the number 
 * to adjust event movement. [Default: 1.01]
 * @default 1.01
 *
 * @param startEventChase performance fix 
 * @type boolean
 * @desc By default, the startEventChase function triggers 
 * constantly during chase. This prevents that. [Default: true]
 * @default true
 *
 * @param Allow Debug 
 * @type boolean
 * @desc By running BISH.QmoveChaseDebug(eventId); in the
 * console(F8), you get a debug message. [Default: true]
 * @default true
 *
 * 
 * @help
 *
 * ---------------------------------------------------------------------------
 * Information about the Plugin
 * ---------------------------------------------------------------------------
 * 
 * This plugin allows for events to move by the defined pixelgrid 
 * in Qmovement during an active chase. This was made possible through
 * Toby/Yasha's original fix.
 *
 * This fix removes the lag caused during a chase scene by modifying how often
 * the event updates its movement route.
 * 
 * ---------------------------------------------------------------------------
 *
 * Important about MOVE ROUTE:
 * When using events that move around, or move at random. 
 * You should NOT use the movement route command: "Move at Random".
 * I can give 2 reasons for this.
 *
 * The first reason is that it causes the events to not find their
 * way back, this results in them jittering around on their home location
 * rather than returning to normal.
 *
 * The second reason is that if the player stalks the event just behind, then
 * the event will not be able to face the player. The "Move at Random" command
 * begins by verifying if it can move to the specific tile. So if the tile is
 * blocked, the event will choose another direction. Meaning the player can avoid
 * encounters simply by being just behind an event.
 *
 * Assuming you're using a sight plugin to trigger the event chase.
 *
 * What to do instead to have random movement?
 * Move route:
 * "Turn at Random"
 * "1 Step Forward"
 *
 * Such a move route takes care of both issues.
 *
 * ---------------------------------------------------------------------------
 *
 * Apart from the main fix, other fixes has been made:
 * - The return phase of an event should now be working properly.
 * - Ensured that the "startEventChase" function only triggers upon start.
 *   - If this causes issues, simply change this feature in the plugin params.
 *  
 * Note: Only tested with Qmovement and YEP_EventChasePlayer, other pixel 
 * movement plugins may or may not work with this.
 *
 * How should you organize the plugins in order for them to work?
 * 1.Qmovement.js
 * 2.YEP_EventChasePlayer.js
 * 3.BISH_TY_Chase_Qmove_FIX.js
 *
 * Troubleshooting:
 * If you are experiencing issues, please use the following command in
 * in the console(F8) and paste the message to Bishiba.
 * BISH.QmoveChaseDebug(eventId)
 * 
 * If you know what you require, you're able to add an array to the arguments
 * that will be collected in the error message.
 * BISH.QmoveChaseDebug(eventId, evalArray). Refer to the event with "event".
 *
 * I.e. BISH.QmoveChaseDebug(55, ["event.x", "event.y"])
 *
 * Then at the bottom of the debug message the evaluated strings will be shown.
 *
 * ---------------------------------------------------------------------------
 *
 * The terms from Qmovement and YEP_EventChasePlayer applies to this plugin.
 * 
 * Credits to Bishiba for this fix appreciated but not required.
 * Credits to Toby Yasha for this fix appreciated but not required.
 * 
 * ---------------------------------------------------------------------------
 * Patch notes:
 * v 1.1
 * Compatibility patch for Smart Pathfinding by Shaz.
 *   - Further patches might be necessary.
 * Corrected parameter descriptions and default values.
 * 
 * v 1.2
 * Added a debug function for getting parameters. The message is automatically
 * copied to the user clipboard.
 *
 * v 1.3
 * Added important information about move routes and how they affect the plugin.
 * Added support for the BISH_ApexCore.
 *
 * v 1.4
 * Improved performance.
 * Changed default value for UPS.
 */

var BISH = BISH || {};
BISH.QmoveChaseFixLoaded = true;

Yanfly.Parameters = PluginManager.parameters('BISH_TY_Chase_Qmove_FIX');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.AdjustEM = Number(Yanfly.Parameters['Adjust Event Movement']);
Yanfly.Param.AdjustEMUpdateSpeed = Number(Math.max(Math.floor(60 / parseInt(Yanfly.Parameters['Updates Per Second']), 5)));
Yanfly.Param.startEventChaseBool = Boolean(Yanfly.Parameters['startEventChase performance fix']);
BISH.QmoveChaseAllowDebug = Boolean(Yanfly.Parameters['Allow Debug']);

Game_Event.prototype._updateIntermission = 0;

Game_Event.prototype.updateChaseMovement = function() {
    if (this._staggerCount > 0) {
      return this._staggerCount--;
    }
    if (this._stopCount > 0 && this._chasePlayer) {
      this.updateDirection($gamePlayer.x, $gamePlayer.y);	
	  
	  var direction = this._lastUpdatedDirection;
      if (direction > 0) {
        var x = this._x * Yanfly.Param.AdjustEM; // Modified by Toby Yasha
        var y = this._y * Yanfly.Param.AdjustEM; // Modified by Toby Yasha
        this.moveStraight(direction);
        if (x === this._x && y === this._y) this._staggerCount = 20;
      }
    } else if (this._stopCount > 0 && this._fleePlayer) {
      this.updateFleeMovement();
    } else if (this._returnPhase) {
		this._targetX = Math.round(this._startLocationX);
		this._targetY = Math.round(this._startLocationY);
      this.updateMoveReturnAfter();
    } else {
      Yanfly.ECP.Game_Event_updateSelfMovement.call(this);
    }
};

Game_Event.prototype.updateMoveReturnAfter = function() {
    if (this._returnFrames > 0) return;
	var x = Math.round(this.x);
	var y = Math.round(this.y);
	var homeX = this._startLocationX;
	var homeY = this._startLocationY;
	var boolX =(x === homeX);
	var boolY =(y === homeY);
	
    if (boolX && boolY) {
		this._returnPhase = false;
		this._returnFrames = 0;
		this._direction = this._startLocationDir;
    } else {
		this.updateDirection(homeX, homeY);
		this.moveStraight(this._lastUpdatedDirection, 1);
	};
	if (this._chasePlayer == true) this._returnPhase = false; //Added for v 1.4
};

Game_Event.prototype.updateDirection = function(x, y) {
	if (this._updateIntermission++ > Yanfly.Param.AdjustEMUpdateSpeed) {
		this._updateIntermission = 0;
		this._lastUpdatedDirection = this.findDirectionTo(x, y);
	}
};

if (Yanfly.Param.startEventChaseBool) { //This function prevents the startEventChase function from 
										//triggering if the event is already chasing the player.
	(function(alias) {
		Game_Event.prototype.startEventChase = function() {
			try {
				if (this._chasePlayer) return;
			} catch(e) {console.error(e)};
			alias.apply(this, arguments);
		}
	}) (Game_Event.prototype.startEventChase);
};

BISH.QmoveChaseDebug = function(eventId, evalArray) { 	//This function generates a debug message 
														//that can be useful when troubleshooting.
	if (!BISH.QmoveChaseAllowDebug) return;
	var event = $gameMap._events[eventId];
	
	var debugMessage = "\n" + "BISH_TY_Chase_Qmove_FIX.js" + "\n";
	debugMessage += "Event ID: " + event._eventId + "\n";
	debugMessage += "Return Phase: " + event._returnPhase + "\n";
	debugMessage += "Chasing Phase: " + event._chasePlayer + "\n";
	debugMessage += "_startLocationX: " + event._startLocationX + "\n";
	debugMessage += "_startLocationY: " + event._startLocationY + "\n";
	debugMessage += "Math.round(this.x): " + Math.round(event.x) + "\n";
	debugMessage += "Math.round(this.y): " + Math.round(event.y) + "\n";
	debugMessage += "Yanfly.Param.AdjustEM: " + Yanfly.Param.AdjustEM + "\n";
	debugMessage += "\nEvaluated Arguments:\n";
	
	if (evalArray) evalArray.forEach((evalArgument) => {
		debugMessage += evalArgument + ": " + eval(evalArgument) + "\n";
	});
	
	const util = require('util');
	require('child_process').spawn('clip').stdin.end(util.inspect(debugMessage));
	console.log("Debug message copied. Paste it in a message and send it to Bishiba.")
	console.log("##############################\n" + debugMessage)
};

try { //The following is a compatibilty fix for Shaz's Smart Path(MV) plugin.
	if ($plugins.find(element => element.name == "smart_path_(mv)").status == true || $plugins.find(element => element.name == "Smart Path (MV)").status == true) {
		Game_Event.prototype.updateMoveReturnAfter = function() {
			if (this._returnFrames > 0) return;
			var x = Math.round(this.x);
			var y = Math.round(this.y);
			var homeX = this._startLocationX;
			var homeY = this._startLocationY;
			var boolX =(x === homeX);
			var boolY =(y === homeY);
			
			if (!this._target) this.setTarget(null, homeX, homeY);
			
			if (boolX && boolY) {
				this._returnPhase = false;
				this._returnFrames = 0;
				this.clearTarget();
				this._direction = this._startLocationDir;
			} 
		};
	};
} catch(e) {};


