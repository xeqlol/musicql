import { 
    GraphQLList,
    GraphQLInt,
    GraphQLString,
    GraphQLObjectType,
    GraphQLSchema
} from 'graphql';

import models from '../models';

import Track from './track';
import MediaType from './mediatype';
import Album from './album';
import Playlist from './playlist';
import Artist from './artist';
import Invoice from './invoice';
import InvoiceItem from './invoiceitem';
import Customer from './customer';
import Employee from './employee';

const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query',
    
    fields: () => {
        return {
            tracks: {
                type: new GraphQLList(Track),
                args: {
                    name: {
                        type: GraphQLString
                    }
                },
                resolve: (root, args) => models.Track.findAll({where: args})
            },
            mediaTypes: {
                type: new GraphQLList(MediaType),
                args: {
                    name: {
                        type: GraphQLString
                    }
                },
                resolve: (root, args) => models.MediaType.findAll({where: args})
            },
            albums: {
                type: new GraphQLList(Album),
                args: {
                    title: {
                        type: GraphQLString
                    }
                },
                resolve: (root, args) => models.Album.findAll({where: args})
            },
            playlist: {
                type: new GraphQLList(Playlist),
                args: {
                    name: {
                        type: GraphQLString
                    }
                },
                resolve: (root, args) => models.Playlist.findAll({where: args})
            },
            artists: {
                type: new GraphQLList(Artist),
                args: {
                    name: {
                        type: GraphQLString
                    }
                },
                resolve: (root, args) => models.Artist.findAll({where: args})
            },
            invoices: {
                type: new GraphQLList(Invoice),
                args: {
                    limit: {
                        type: GraphQLInt
                    }
                },
                resolve: (root, args) => models.Invoice.findAll({limit: args.limit})
            },
            invoiceItems: {
                type: new GraphQLList(InvoiceItem),
                args: {
                    limit: {
                        type: GraphQLInt
                    }
                },
                resolve: (root, args) => models.InvoiceItem.findAll({limit: args.limit})
            },
            customers: {
                type: new GraphQLList(Customer),
                args: {
                    limit: {
                        type: GraphQLInt
                    }
                },
                resolve: (root, args) => models.Customer.findAll({limit: args.limit})
            },
            employees: {
                type: new GraphQLList(Employee),
                args: {
                    limit: {
                        type: GraphQLInt
                    }
                },
                resolve: (root, args) => models.Employee.findAll({limit: args.limit})
            }
        }
    }
});

const Schema = new GraphQLSchema({
    query: Query
});

export default Schema;