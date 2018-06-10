const localStorage = window.localStorage;

export function save(id, data) {
  localStorage.setItem(id, data);
}

export function get(id) {
  localStorage.getItem(id);
}

export function update(id, data) {
  remove(id);
  save(id, data)
}

export function remove(id) {
  localStorage.removeItem(id);
}
