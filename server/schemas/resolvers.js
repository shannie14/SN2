const { AuthenticationError } = require("apollo-server-express");

//secure login
const { User } = require('../models');
const { signToken } = require("../utils/auth");

//query instructions

const { Episode } = require('../models');

const resolvers = {
    Query: {
        episodes: async () => {
            return await Episode.find({});
        },

        //will below enable the search to call all episode info?
        episode: async (parent, { _id }) => {
            return await Episode.findbyID
                (_id);
        },
    },

    //mutation, but i don't want new users to be created
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return { token, user };
        }
    }
};

module.exports = resolvers;