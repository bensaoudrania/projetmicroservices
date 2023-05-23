const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PORT = 4000;

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, './livre.proto'),
  {keepCase: true, longs: String, enums: String, defaults: true, oneofs: true}
);

const livreProto = grpc.loadPackageDefinition(packageDefinition).livre;

const client = new livreProto.LivreService(
  `localhost:${PORT}`,
  grpc.credentials.createInsecure()
);

const livreResolver = {
  Query: {
    livres: () => {
      return new Promise((resolve, reject) => {
        client.getLivres({}, (err, response) => {
          if (err) {
            reject(err);
          } else {
            resolve(response.livres);
          }
        });
      });
    },
  },
};

module.exports = livreResolver;