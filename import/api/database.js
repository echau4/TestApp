const MongoClient = require('mongodb').MongoClient
const host = ''

function run(cb) {
  MongoClient.connect(host, cb)
}

export const Names = new Mongo.Collection('names');

export function save(data, onSave) {
  Names.insert(data, onSave);
}

export function get(query = {}, maxCount = 25) {
  const a = []

  run((err, client) => {
    if (err) {
      console.error(err)
      return
    }

    const { db } = client
    const collection = db.collection('names')
    a = collection.find({}).toArrary()

    client.close()
  })

  return a 
}

export function update(id, data) {
  Names.update(id, {$set: {firstName: data}});
}

export function remove(id) {
  Names.remove(id);
}
