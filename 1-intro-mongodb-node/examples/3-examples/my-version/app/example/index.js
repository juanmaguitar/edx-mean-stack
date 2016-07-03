var Promise = require('bluebird');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var Collection = mongodb.Collection;

Promise.promisifyAll(Collection.prototype);
Promise.promisifyAll(MongoClient);

const uri = 'mongodb://localhost:27017/example';
const handleError = (error) => { console.log(error); process.exit(1); }

MongoClient.connectAsync(uri)
  .then( insertDocument )
  .then( findDocument )
  .catch( handleError )

function insertDocument(db) {
  db.collection('sample').insert({ x: 1 });
  return db;
}

function findDocument( db ) {
  db.collection('sample').find().toArray( showDocument )
}

function showDocument(error, docs) {
  docs.forEach( (doc) => console.log(JSON.stringify(doc)) );
  process.exit(0);
}