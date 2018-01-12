export default (sequelize, DataType) => {
    const Playlist = sequelize.define('Playlist', {
        playlistId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'PlaylistId'
        },
        name: {
            type: DataType.STRING,
            field: 'Name'
        }
    }, {
        timestamps: false,
        tableName: 'playlists',
        freezeTableName: true
    });
    
    Playlist.associate = (models) => {
        models.Playlist.belongsToMany(models.Track, {through: 'PlaylistTrack', foreignKey: 'TrackId'});
    }

    return Playlist;
}