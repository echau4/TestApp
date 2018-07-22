// const localStorage = window.localStorage;

import { Mongo } from 'meteor/mongo'; 
export const Names = new Mongo.Collection('names');

export function save(data) {
  // localStorage.setItem(id, data);
  Names.insert(data);
}

export function get(id) {
  // localStorage.getItem(id);
  Names.find(id);
}

export function update(id, data) {
  Names.update(id, {$set: {firstName: data}});
}

export function remove(id) {
  // localStorage.removeItem(id);
  Names.remove(id);
}
