export default (sequelize, DataType) => {
    const InvoiceItem = sequelize.define('InvoiceItem', {
        invoiceLineId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'InvoiceLineId'
        },
        invoiceId: {
            type: DataType.INTEGER,
            field: 'InvoiceId'
        },
        trackId: {
            type: DataType.INTEGER,
            field: 'TrackId'
        },
        UnitPrice: {
            type: DataType.FLOAT,
            field: 'UnitPrice'
        },
        quantity: {
            type: DataType.INTEGER,
            field: 'Quantity'
        }
    }, {
        timestamps: false,
        tableName: 'invoice_items',
        freezeTableName: true
    });

    InvoiceItem.associate = (models) => {
        models.InvoiceItem.hasOne(models.Track, {foreignKey: 'TrackId'});
        models.InvoiceItem.hasOne(models.Invoice, {foreignKey: 'InvoiceId'});
    }

    return InvoiceItem;
}