const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//Count all collections
db.collection('Todos').find().count().then( (count) => {
  console.log('Total collections: ');
  console.log('**********************************');
  console.log(`Total collections: ${count}`);
  console.log('**********************************');

}, (err) => {
  console.log('Cannot find the Todos collection', err);
});

//Print all collections
db.collection('Todos').find(/*{completed: "true"}*/).toArray().then( (docs) => {
  console.log('Todos');
  console.log('##################################');
  console.log(JSON.stringify(docs, undefined, 2));
  console.log('##################################');

}, (err) => {
  console.log('Cannot find the Todos collection', err);
});

  db.close();
});
