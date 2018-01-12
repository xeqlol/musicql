export default (sequelize, DataType) => {
    const Track = sequelize.define('Track', {
        trackId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'TrackId'
        },
        name: {
            type: DataType.STRING(220),
            field: 'Name'
        },
        albumId: {
            type: DataType.INTEGER,
            field: 'AlbumId'
        },
        mediaTypeId: {
            type: DataType.INTEGER,
            field: 'MediaTypeId'
        },
        genreId: {
            type: DataType.INTEGER,
            field: 'GenreId'
        },
        composer: {
            type: DataType.STRING(200),
            field: 'Composer'
        },
        milliseconds: {
            type: DataType.INTEGER,
            field: 'Milliseconds'
        },
        bytes: {
            type: DataType.INTEGER,
            field: 'Bytes'
        },
        unitPrice: {
            type: DataType.FLOAT,
            field: 'UnitPrice'
        }
    }, {
        timestamps: false,
        tableName: 'tracks',
        freezeTableName:true
    });

    Track.associate = (models) => {
        models.Track.belongsTo(models.MediaType, {foreignKey: 'mediaTypeId'});
        models.Track.belongsTo(models.Genre, {foreignKey: 'genreId'});
        models.Track.belongsTo(models.Album, {foreignKey: 'albumId'});
        models.Track.belongsToMany(models.Playlist, {through: 'PlaylistTrack', foreignKey: 'PlaylistId'});
    }

    return Track;
}