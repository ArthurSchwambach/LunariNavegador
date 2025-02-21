/*:
 * @plugindesc Pixel Movement Plugin - Permite movimentação baseada em pixels no RPG Maker MV.
 * @author SeuNome
 * 
 * @param Pixel Step
 * @type number
 * @min 1
 * @desc O número de pixels por passo (ex.: 1 para movimento mais suave).
 * @default 1
 *
 * @help
 * Este plugin altera o sistema de movimentação para permitir movimentação por pixel.
 *
 * Instruções:
 * 1. Ative o plugin no gerenciador de plugins.
 * 2. Ajuste o parâmetro "Pixel Step" conforme necessário.
 *
 * Compatibilidade:
 * Pode requerer ajustes em plugins que dependem da movimentação padrão.
 */

(function() {
    var parameters = PluginManager.parameters('PixelMovement');
    var pixelStep = Number(parameters['Pixel Step'] || 1);

    // Sobrescreve a movimentação do jogador
    Game_CharacterBase.prototype.moveStraight = function(d) {
        var dx = d === 6 ? pixelStep : d === 4 ? -pixelStep : 0;
        var dy = d === 2 ? pixelStep : d === 8 ? -pixelStep : 0;

        // Verifica colisões antes de mover
        if (!this.isCollidedWithCharacters(this.x + dx / $gameMap.tileWidth(), this.y + dy / $gameMap.tileHeight())) {
            this._realX += dx / $gameMap.tileWidth();
            this._realY += dy / $gameMap.tileHeight();
        }
    };

    // Atualiza colisões para pixel movement
    Game_CharacterBase.prototype.isCollidedWithCharacters = function(x, y) {
        var characters = $gameMap.events().filter(event => event.isNormalPriority());
        return characters.some(character => Math.abs(character._realX - x) < 0.5 && Math.abs(character._realY - y) < 0.5);
    };
})();
