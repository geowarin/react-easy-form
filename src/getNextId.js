let currentId = 1;

export default function getNextId(prefix = 'id_') {
  return prefix + (currentId++);
}
