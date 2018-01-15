import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} from 'graphql';

import Track from './track';

const Playlist = new GraphQLObjectType({
    name: 'Playlist',
    description: 'Playlist',

    fields: () => {
        return {
            playlistId: {
                type: GraphQLInt,
                resolve: playlist => playlist.playlistId
            },
            name: {
                type: GraphQLString,
                resolve: playlist => playlist.name
            },
            tracks: {
                type: new GraphQLList(Track),
                resolve: playlist => playlist.getTracks()
            }
        }
    }
});

export default Playlist;