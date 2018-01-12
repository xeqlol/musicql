import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat
} from 'graphql';

import Album from './album';

const Artist = new GraphQLObjectType({
    name: 'Artist',
    description: 'Artist',

    fields: () => {
        return {
            artistId: {
                type: GraphQLInt,
                resolve: artist => artist.artistId
            },
            name: {
                type: GraphQLString,
                resolve: artist => artist.name
            },
            albums: {
                type: new GraphQLList(Album),
                resolve: artist => artist.getAlbums()
            }
        }
    }
});

export default Artist;