// import { Mongo } from 'meteor/mongo'; 

// export const Names = new Mongo.Collection('names');

let dataStore = [
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
  dataStore[id] = data
}

export function remove(id) {
  const newDataStore = []
  for (let i = 0; i < dataStore.length; i++) {
    if (id === i) {
      continue
    }

    newDataStore.push(dataStore[i])
  }

  dataStore = newDataStore
}
