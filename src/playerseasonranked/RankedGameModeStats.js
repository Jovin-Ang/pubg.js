/**
 * An API returned ranked game mode stats
 * @class RankedGameModeStats
 */
class RankedGameModeStats {
    constructor(content) {
        /**
         * Current rank point
         * @type {Number}
         */
        this.currentRankPoint = content.currentRankPoint;

        /**
         * Best rank point
         * @type {Number}
         */
        this.bestRankPoint = content.bestRankPoint;

        /**
         * Current tier
         * @type {Object}
         */
        this.currentTier = content.currentTier;

        /**
         * Best tier
         * @type {Object}
         */
        this.bestTier = content.bestTier;

        /**
         * Rounds played
         * @type {Number}
         */
        this.roundsPlayed = content.roundsPlayed;

        /**
         * Average rank
         * @type {Number}
         */
        this.avgRank = content.avgRank;

        /**
         * Average time survived
         * @type {string}
         */
        this.avgSurvivalTime = content.avgSurvivalTime;

        /**
         * top10 ratio
         * @type {string}
         */
        this.top10Ratio = content.top10Ratio;

        /**
         * Win Ratio
         * @type {string}
         */
        this.winRatio = content.winRatio;

        /**
         * Assists
         * @type {string}
         */
        this.assists = content.assists;

        /**
         * Wins
         * @type {string}
         */
        this.wins = content.wins;

        /**
         * Kill death assist ratio
         * @type {string}
         */
        this.kda = content.kda;

        /**
         * Kills to death ratio
         * @type {string}
         */
        this.kdr = content.kdr;

        /**
         * Kills
         * @type {string}
         */
        this.kills = content.kills;

        /**
         * Deaths
         * @type {string}
         */
        this.deaths = content.deaths;

        /**
         * Highest number of kills
         * @type {string}
         */
        this.roundMostKills = content.roundMostKills;

        /**
         * Longest distance kill
         * @type {string}
         */
        this.longestKill = content.longestKill;

        /**
         * Headshot kills
         * @type {string}
         */
        this.headshotKills = content.headshotKills;

        /**
         * Headshot kills ratio
         * @type {string}
         */
        this.headshotKillRatio = content.headshotKillRatio;

        /**
         * Total damage dealt
         * @type {string}
         */
        this.damageDealt = content.damageDealt;

        /**
         * Number of enemy players knocked
         * @type {string}
         */
        this.dBNOs = content.dBNOs;

        /**
         * Ratio of number of times this player revived teammates
         * @type {string}
         */
        this.reviveRatio = content.reviveRatio;

        /**
         * Number of times this player revived teammates
         * @type {string}
         */
        this.revives = content.revives;

        /**
         * Number of kills during the most recent day played.
         * @type {string}
         */
        this.dailyKills = content.dailyKills;

        /**
         * Number of healing items used
         * @type {string}
         */
        this.heals = content.heals;

        /**
         * Number of boost items used
         * @type {string}
         */
        this.boosts = content.boosts;

        /**
         * Number of weapons picked up
         * @type {string}
         */
        this.weaponsAcquired = content.weaponsAcquired;

        /**
         * Number of times this player killed a teammate
         * @type {string}
         */
        this.teamKills = content.teamKills;

        /**
         * Amount of time played
         * @type {string}
         */
        this.playTime = content.playTime;

        /**
         * Highest kill streak
         * @type {string}
         */
        this.killStreak = content.killStreak;
    }
}

module.exports = RankedGameModeStats;
