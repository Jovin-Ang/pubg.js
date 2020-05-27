module.exports = {
    Client: require('./Client'),

    Match: require('./matches/Match'),
    Asset: require('./matches/Asset'),
    Participant: require('./matches/Participant'),
    Roster: require('./matches/Roster'),

    GameModeStats: require('./playerseason/GameModeStats'),
    PlayerSeason: require('./playerseason/PlayerSeason'),

    RankedGameModeStats: require('./playerseasonranked/RankedGameModeStats'),
    PlayerSeasonRanked: require('./playerseasonranked/PlayerSeasonRanked'),

    Player: require('./Player'),
    Season: require('./Season'),
    Status: require('./Status'),

    version: require('../package.json').version,
};
