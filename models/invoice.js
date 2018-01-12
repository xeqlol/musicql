export default (sequelize, DataType) => {
    const Invoice = sequelize.define('Invoice', {
        invoiceId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'InvoiceId'
        },
        customerId: {
            type: DataType.INTEGER,
            field: 'CustomerId'
        },
        invoiceDate: {
            type: DataType.DATE,
            field: 'InvoiceDate'
        },
        billingAddress: {
            type: DataType.STRING,
            field: 'BillingAddress'
        },
        billingCity: {
            type: DataType.STRING,
            field: 'BillingCity'
        },
        billingState: {
            type: DataType.STRING,
            field: 'BillingState'
        },
        billingCountry: {
            type: DataType.STRING,
            field: 'BillingCountry'
        },
        billingPostalCode: {
            type: DataType.STRING,
            field: 'BillingPostalCode'
        },
        total: {
            type: DataType.FLOAT,
            field: 'Total'
        }
    }, {
        timestamps: false,
        tableName: 'invoices',
        freezeTableName: true
    });

    Invoice.associate = (models) => {
        models.Invoice.hasOne(models.Customer, {foreignKey: 'CustomerId'});
        models.Invoice.hasMany(models.InvoiceItem, {foreignKey: 'InvoiceId'});
    }

    return Invoice;
}