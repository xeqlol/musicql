export default (sequelize, DataType) => {
    const Customer = sequelize.define('Customer', {
        customerId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'CustomerId'
        },
        firstName: {
            type: DataType.STRING,
            field: 'FirstName'
        },
        lastName: {
            type: DataType.STRING,
            field: 'LastName'
        },
        company: {
            type: DataType.STRING,
            field: 'Company'
        },
        address: {
            type: DataType.STRING,
            field: 'Address'
        },
        city: {
            type: DataType.STRING,
            field: 'City'
        },
        state: {
            type: DataType.STRING,
            field: 'State'
        },
        country: {
            type: DataType.STRING,
            field: 'Country'
        },
        postalCode: {
            type: DataType.STRING,
            field: 'PostalCode'
        },
        phone: {
            type: DataType.STRING,
            field: 'Phone'
        },
        fax: {
            type: DataType.STRING,
            field: 'Fax'
        },
        email: {
            type: DataType.STRING,
            field: 'Email'
        },
        supportRepId: {
            type: DataType.INTEGER,
            field: 'SupportRepId'
        }
    }, {
        timestamps: false,
        tableName: 'customers',
        freezeTableName: true
    });

    Customer.associate = (models) => {
        models.Customer.hasMany(models.Employee, {foreignKey: 'employeeId', sourceKey: 'supportRepId'});
        models.Customer.hasMany(models.Invoice, {foreignKey: 'customerId'});
    }

    return Customer;
}