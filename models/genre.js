export default (sequelize, DataType) => {
    const Genre = sequelize.define('Genre', {
        genreId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'GenreId'
        },
        name: {
            type: DataType.STRING,
            field: 'Name'
        }
    }, {
        timestamps: false,
        tableName: 'genres',
        freezeTableName: true
    });


    
    return Genre;
}