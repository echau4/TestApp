// import { Mongo } from 'meteor/mongo'; 

// export const Names = new Mongo.Collection('names');

const dataStore = [
  {
    key: 0,
    firstName: "Elizabeth",
    lastName: "Chau"
  }
]

export function save(data, onSave) {
  dataStore.push({
    key: dataStore.length,
    ...data
  })

  onSave()
}

export function get() {
  return dataStore
}

export function update(id, data) {

}

export function remove(id) {

}
