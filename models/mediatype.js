export default (sequelize, DataType) => {
    const MediaType = sequelize.define('MediaType', {
        mediaTypeId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'MediaTypeId'
        },
        name: {
            type: DataType.STRING(120),
            field: 'Name'
        }
    }, {
        timestamps: false,
        tableName: 'media_types',
        freezeTableName:true
    });

    MediaType.associate = (models) => {
        models.MediaType.hasMany(models.Track, {foreignKey: 'mediaTypeId'});
    }

    return MediaType;
}