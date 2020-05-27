const RankedGameModeStats = require('./RankedGameModeStats');
const Player = require('../Player');
const Season = require('../Season');

/**
 * An API returned player season object
 * @class PlayerSeason
 */
class PlayerSeasonRanked {
    constructor(content, client) {
        /**
         * Attributes of the PlayerSeason
         * @type {Object}
         * @property {Object} attributes.rankedGameModeStats An object full of all ranked game mode types being `squad`, `squadFPP`
         */
        this.attributes = {
            gameModeStats: {
                squad: new RankedGameModeStats(content.attributes.rankedGameModeStats.squad),
                squadFPP: new RankedGameModeStats(
                    content.attributes.rankedGameModeStats['squad-fpp']
                ),
            },
        };

        /**
     * Relationships of the PlayerSeasonRanked
     * @type {Object}
     * @property {Player} relationships.player Player of the PlayerSeason
     * @property {Season} relationships.season All solo matches played during the season by the player
     */
        this.relationships = {
            player: content.relationships.player instanceof Player ?
                content.relationships.player :
                new Player(content.relationships.player.data.id, client),

            season: new Season(content.relationships.season.data.id),
        };
    }
}

module.exports = PlayerSeasonRanked;
