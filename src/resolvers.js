const Survivors = require('./survivors')

module.exports = {
  Query: {
    survivors: () => Survivors.find(),
    survivor: (_, { name }) => Survivors.find(name)
  },

  Mutation: {
    CreateSurvivors: (_, { name, attribute, email, infectado }) => Survivors.create({ name, attribute, email, infectado }),
    Infected: (_, { id, input }) => Survivors.findOneAndUpdate({ id }, input, {new: true}),
    RemoveSurvivors: (_, { id }) => Survivors.findOneAndRemove({ id }),
  }
};