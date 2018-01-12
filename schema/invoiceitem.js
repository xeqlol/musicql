import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat
} from 'graphql';

import Invoice from './invoice';

const InvoiceItem = new GraphQLObjectType({
    name: 'InvoiceItem',
    description: 'InvoiceItem',

    fields: () => {
        return {
            invoiceLineId: {
                type: GraphQLInt,
                resolve: invoiceItem => invoiceItem.invoiceLineId
            },
            invoiceId: {
                type: GraphQLInt,
                resolve: invoiceItem => invoiceItem.invoiceId
            },
            trackId: {
                type: GraphQLInt,
                resolve: invoiceItem => invoiceItem.trackId
            },
            UnitPrice: {
                type: GraphQLFloat,
                resolve: invoiceItem => invoiceItem.UnitPrice
            },
            quantity: {
                type: GraphQLInt,
                resolve: invoiceItem => invoiceItem.quantity
            },
            invoice: {
                type: Invoice,
                resolve: invoiceItem => invoiceItem.getInvoice()
            }
        }
    }
});

export default InvoiceItem;