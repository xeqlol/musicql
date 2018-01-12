import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} from 'graphql';

import Track from './track';

const MediaType = new GraphQLObjectType({
    name: 'MediaType',
    description: 'MediaType',
    
    fields: () => {
        return {
            mediaTypeId: {
                type: GraphQLInt,
                resolve: (mediaType) => mediaType.mediaTypeId
            },
            name: {
                type: GraphQLString,
                resolve: (mediaType) => mediaType.name
            },
            tracks: {
                type: new GraphQLList(Track),
                resolve: (mediaType) => mediaType.getTracks()
            }
        }
    }
});

export default MediaType;