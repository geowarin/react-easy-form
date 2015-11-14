let currentId = 1;

export default function getNextId(prefix = 'id_') {
  const id = prefix + (currentId++);
  console.log('nextId', id)
  return id;
}
