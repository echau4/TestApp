// import { Mongo } from 'meteor/mongo'; 

// export const Names = new Mongo.Collection('names');

const dataStore = []

export function save(data, onSave) {
  dataStore.push(data)

  onSave()
}

export function get() {
  return dataStore
}

export function update(id, data) {

}

export function remove(id) {

}
