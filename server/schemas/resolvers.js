const { AuthenticationError } = require('apollo-server-express');
const { User, Recipe } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('recipes')

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    // users: async () => {
    //   return User.find()
    //     .select('-__v -password')
    //     .populate('recipes')
    // },
    // user: async (parent, { username }) => {
    //   return User.findOne({ username })
    //     .select('-__v -password')
    //     .populate('recipes')
    // },
    // recipes: async (parent, { username }) => {
    //   const params = username ? { username } : {};
    //   return Recipe.find(params).sort({ createdAt: -1 });
    // },
    // recipe: async (parent, { _id }) => {
    //   return Recipe.findOne({ _id });
    // }
  },

  // Mutation: {
  //   addUser: async (parent, args) => {
  //     const user = await User.create(args);
  //     const token = signToken(user);

  //     return { token, user };
  //   },
    
  //   login: async (parent, { email, password }) => {
  //     const user = await User.findOne({ email });

  //     if (!user) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const correctPw = await user.isCorrectPassword(password);

  //     if (!correctPw) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const token = signToken(user);
  //     return { token, user };
  //   },

  //   saveRecipe: async (parent, { input }, context) => {
  //     if (context.user) {
  //         const updatedUser = await User.findOneandUpdate(
  //             { _id: context.user._id },
  //             { $addToSet: { savedRecipes: input } },
  //             { new: true, runValidators: true }
  //         )

  //         return updatedUser;
  //     }

  //     throw new AuthenticationError('Not logged in!')
  //   },

  //   removeRecipe: async (parent, { recipeId }, context) => {
  //     if (context.user) {
  //         const updatedUser = await User.findOneandUpdate(
  //             { _id: context.user._id },
  //             { $pull: { savedRecipes: { recipeId: recipeId } } },
  //             { new: true }
  //         )

  //         return updatedUser;
  //     }

  //     throw new AuthenticationError("Couldn't find a user with this id!");
  //   }
    
  // }
};

module.exports = resolvers;