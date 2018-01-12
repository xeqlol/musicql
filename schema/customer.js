import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat
} from 'graphql';

import Invoice from './invoice';
import Employee from './employee';

const Customer = new GraphQLObjectType({
    name: 'Customer',
    description: 'Customer',

    fields: () => {
        return {
            customerId: {
                type: GraphQLInt,
                resolve: customer => customer.customerId
            },
            firstName: {
                type: GraphQLString,
                resolve: customer => customer.firstName
            },
            lastName: {
                type: GraphQLString,
                resolve: customer => customer.lastName
            },
            company: {
                type: GraphQLString,
                resolve: customer => customer.company
            },
            address: {
                type: GraphQLString,
                resolve: customer => customer.address
            },
            city: {
                type: GraphQLString,
                resolve: customer => customer.city
            },
            state: {
                type: GraphQLString,
                resolve: customer => customer.state
            },
            country: {
                type: GraphQLString,
                resolve: customer => customer.country
            },
            postalCode: {
                type: GraphQLString,
                resolve: customer => customer.postalCode
            },
            phone: {
                type: GraphQLString,
                resolve: customer => customer.phone
            },
            fax: {
                type: GraphQLString,
                resolve: customer => customer.fax
            },
            email: {
                type: GraphQLString,
                resolve: customer => customer.email
            },
            supportRepId: {
                type: GraphQLInt,
                resolve: customer => customer.supportRepId
            },
            invoices: {
                type: new GraphQLList(Invoice),
                resolve: customer => customer.getInvoices()
            },
            employees: {
                type: new GraphQLList(Employee),
                resolve: customer => customer.getEmployees()
            }
        }
    }
});

export default Customer;