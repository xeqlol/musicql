import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat
} from 'graphql';

import MediaType from './mediatype';
import Genre from './genre';
import Album from './album';
import Playlist from './playlist';

const Track = new GraphQLObjectType({
    name: 'Track',
    description: 'Track',
    
    fields: () => {
        return {
            trackId: {
                type: GraphQLInt,
                resolve: (track) => track.trackId
            },
            name: {
                type: GraphQLString,
                resolve: (track) => track.name
            },
            albumId: {
                type: GraphQLInt,
                resolve: (track) => track.albumId
            },
            mediaTypeId: {
                type: GraphQLInt,
                resolve: (track) => track.mediaTypeId
            },
            genreId: {
                type: GraphQLInt,
                resolve: (track) => track.genreId
            },
            composer: {
                type: GraphQLString,
                resolve: (track) => track.composer
            },
            milliseconds: {
                type: GraphQLInt,
                resolve: (track) => track.milliseconds
            },
            bytes: {
                type: GraphQLInt,
                resolve: (track) => track.bytes
            },
            unitPrice: {
                type: GraphQLFloat,
                resolve: (track) => track.unitPrice
            },
            mediaType: {
                type: MediaType,
                resolve: (track) => track.getMediaType()
            },
            genre: {
                type: Genre,
                resolve: (track) => track.getGenre()
            },
            album: {
                type: Album,
                resolve: (track) => track.getAlbum()
            },
            playlists: {
                type: new GraphQLList(Playlist),
                resolve: (track) => track.getPlaylists()
            }
        }
    }
});

export default Track;