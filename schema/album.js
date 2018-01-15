import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat
} from 'graphql';

import Track from './track';
import Artist from './artist';

const Album = new GraphQLObjectType({
    name: 'Album',
    description: 'Album',

    fields: () => {
        return {
            albumId: {
                type: GraphQLInt,
                resolve: album => album.albumId
            },
            title: {
                type: GraphQLString,
                resolve: album => album.title
            },
            artistId: {
                type: GraphQLInt,
                resolve: album => album.artistId
            },
            tracks: {
                type: new GraphQLList(Track),
                resolve: album => album.getTracks()
            },
            artist: {
                type: Artist,
                resolve: album => album.getArtist()
            }
        }
    }
});

export default Album;