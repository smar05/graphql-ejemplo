export const resolvers = {
  Query: {
    hello: () => {
      return "Hola desarrollo web con GraphQL";
    },
    MiNumber() {
      return 1313;
    },
  },
};
