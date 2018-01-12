export default (sequelize, DataType) => {
    const PlaylistTrack = sequelize.define('PlaylistTrack', {
        playlistId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'PlaylistId'
        },
        trackId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'TrackId'
        }
    }, {
        timestamps: false,
        tableName: 'playlist_track',
        freezeTableName: true
    });
    
    PlaylistTrack.associate = (models) => {
        models.PlaylistTrack.hasOne(models.Playlist, {foreignKey: 'PlaylistId'});
        models.PlaylistTrack.hasOne(models.Track, {foreignKey: 'TrackId'});
    }

    return PlaylistTrack;
}