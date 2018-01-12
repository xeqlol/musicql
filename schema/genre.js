import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLFloat
} from 'graphql';

const Genre = new GraphQLObjectType({
    name: 'Genre',
    description: 'Genre',
    
    fields: () => {
        return {
            genreId: {
                type: GraphQLInt,
                resolve: (genre) => genre.genreId
            },
            name: {
                type: GraphQLString,
                resolve: (genre) => genre.name
            }
        }
    }
});

export default Genre;