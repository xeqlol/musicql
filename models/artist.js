export default (sequelize, DataType) => {
    const Artist = sequelize.define('Artist', {
        artistId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'ArtistId'
        },
        name: {
            type: DataType.STRING,
            field: 'Name'
        }
    }, {
        timestamps: false,
        tableName: 'artists',
        freezeTableName: true
    });

    Artist.associate = (models) => {
        models.Artist.hasMany(models.Album, {foreignKey: 'artistId'});
    }
    
    return Artist;
}