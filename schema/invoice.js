import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat
} from 'graphql';

import InvoiceItem from './invoiceitem';

const Invoice = new GraphQLObjectType({
    name: 'Invoice',
    description: 'Invoice',

    fields: () => {
        return {
            invoiceId: {
                type: GraphQLInt,
                resolve: invoice => invoice.invoiceId
            },
            customerId: {
                type: GraphQLInt,
                resolve: invoice => invoice.customerId
            },
            invoiceDate: {
                type: GraphQLString,
                resolve: invoice => invoice.invoiceDate
            },
            billingAddress: {
                type: GraphQLString,
                resolve: invoice => invoice.billingAddress
            },
            billingCity: {
                type: GraphQLString,
                resolve: invoice => invoice.billingCity
            },
            billingState: {
                type: GraphQLString,
                resolve: invoice => invoice.billingState
            },
            billingCountry: {
                type: GraphQLString,
                resolve: invoice => invoice.billingCountry
            },
            billingPostalCode: {
                type: GraphQLString,
                resolve: invoice => invoice.billingPostalCode
            },
            total: {
                type: GraphQLFloat,
                resolve: invoice => invoice.total
            },
            invoiceItems: {
                type: new GraphQLList(InvoiceItem),
                resolve: invoice => invoice.getInvoiceItems()
            }
        }
    }
});

export default Invoice;