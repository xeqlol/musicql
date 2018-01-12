import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema
} from 'graphql';

const Playlist = new GraphQLObjectType({
    name: 'Playlist',
    description: 'Playlist',

    fields: () => {
        return {
            playlistId: {
                type: GraphQLInt,
                resolve: (playlist) => playlist.playlistId
            },
            name: {
                type: GraphQLString,
                resolve: (playlist) => playlist.name
            }
        }
    }
});

export default Playlist;