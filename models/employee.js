export default (sequelize, DataType) => {
    const Employee = sequelize.define('Employee', {
        employeeId: {
            type: DataType.INTEGER,
            primaryKey: true,
            field: 'EmployeeId'
        },
        lastName: {
            type: DataType.STRING,
            field: 'LastName'
        },
        firstName: {
            type: DataType.STRING,
            field: 'firstName'
        },
        title: {
            type: DataType.STRING,
            field: 'Title'
        },
        reportsTo: {
            type: DataType.INTEGER,
            field: 'ReportsTo'
        },
        birthDate: {
            type: DataType.DATE,
            field: 'BirthDate'
        },
        hireDate: {
            type: DataType.DATE,
            field: 'HireDate'
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
        }
    }, {
        timestamps: false,
        tableName: 'employees',
        freezeTableName: true
    });

    Employee.associate = (models) => {
        //models.Employee.hasMany(models.Employee, {as: 'reportesToEmployees', foreignKey: 'ReportsTo'});
    }

    return Employee;
}