export default (sequelize, DataType) => {
    const Album = sequelize.define('Album', {
        albumId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'AlbumId'
        },
        title: {
            type: DataType.STRING,
            field: 'Title'
        },
        artistId: {
            type: DataType.INTEGER,
            field: 'ArtistId'
        }
    }, {
        timestamps: false,
        tableName: 'albums',
        freezeTableName:true
    });

    Album.associate = (models) => {
        models.Album.belongsTo(models.Artist, {foreignKey: 'ArtistId'});
        models.Album.hasMany(models.Track, {foreignKey: 'albumId'});
    }

    return Album;
}