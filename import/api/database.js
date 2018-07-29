import { Mongo } from 'meteor/mongo'; 

export const Names = new Mongo.Collection('names');

export function save(data, onSave) {
  Names.insert(data, onSave);
}

export function get(id) {
  return Names.find(id);
}

export function update(id, data) {
  Names.update(id, {$set: {firstName: data}});
}

export function remove(id) {
  Names.remove(id);
}
