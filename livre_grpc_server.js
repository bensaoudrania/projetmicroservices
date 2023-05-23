const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PORT = 4000;

const packageDefinition = protoLoader.loadSync(
  path.join(__dirname, './livre.proto'),
  {keepCase: true, longs: String, enums: String, defaults: true, oneofs: true}
);

const livreProto = grpc.loadPackageDefinition(packageDefinition).livre;

const livres = [
  {id: 1, titre: 'Livre A', auteur: 'Auteur A', annee: 2000},
  {id: 2, titre: 'Livre B', auteur: 'Auteur B', annee: 2005},
  {id: 3, titre: 'Livre C', auteur: 'Auteur C', annee: 2010},
];

function getLivres(call, callback) {
  callback(null, {livres});
}

function main() {
  const server = new grpc.Server();
  server.addService(livreProto.LivreService.service, {getLivres});
  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`gRPC server running on port ${PORT}`);
    server.start();
  });
}

main();