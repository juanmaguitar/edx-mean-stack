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
	const doc = {
		title: 'Jaws',
		year: 1975,
		director: 'Steven Spielberg',
		rating: 'PG',
		ratings: {
			critics: 80,
			audience: 97
		},
		screenplay: ['Peter Benchley', 'Carl Gotlieb']
	}
  db.collection('movies').insert( doc );
  return db;
}

function findDocument( db ) {
	const query = { screenplay: 'Peter Benchley' };
	const query2 = { 'ratings.audience' : { '$gte': 90 } };
  db.collection('movies').find( query2 ).toArray( showDocument )
}

function showDocument(error, docs) {
  docs.forEach( (doc) => console.log(JSON.stringify(doc)) );
  process.exit(0);
}