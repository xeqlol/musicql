import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat
} from 'graphql';

const Employee = new GraphQLObjectType({
    name: 'Employee',
    description: 'Employee',

    fields: () => {
        return {
            employeeId: {
                type: GraphQLInt,
                resolve: employee => employee.employeeId
            },
            lastName: {
                type: GraphQLString,
                resolve: employee => employee.lastName
            },
            firstName: {
                type: GraphQLString,
                resolve: employee => employee.firstName
            },
            title: {
                type: GraphQLString,
                resolve: employee => employee.title
            },
            reportsTo: {
                type: GraphQLInt,
                resolve: employee => employee.reportsTo
            },
            birthDate: {
                type: GraphQLString,
                resolve: employee => employee.birthDate
            },
            hireDate: {
                type: GraphQLString,
                resolve: employee => employee.hireDate
            },
            address: {
                type: GraphQLString,
                resolve: employee => employee.address
            },
            city: {
                type: GraphQLString,
                resolve: employee => employee.city
            },
            state: {
                type: GraphQLString,
                resolve: employee => employee.state
            },
            country: {
                type: GraphQLString,
                resolve: employee => employee.country
            },
            postalCode: {
                type: GraphQLString,
                resolve: employee => employee.postalCode
            },
            phone: {
                type: GraphQLString,
                resolve: employee => employee.phone
            },
            fax: {
                type: GraphQLString,
                resolve: employee => employee.fax
            },
            email: {
                type: GraphQLString,
                resolve: employee => employee.email
            },
            reportsToEmployees: {
                type: new GraphQLList(Employee),
                resolve: employee => employee.getReportesToEmployees()
            }
        }
    }
});

export default Employee;