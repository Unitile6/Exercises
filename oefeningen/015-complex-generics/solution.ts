
export function every<T>(coll: T[], predicate: (item: T, index: number) => boolean): boolean {
  for (let i = 0; i < coll.length; i++) {
    const item = coll[i];

    if (!predicate(item, i)) {
      return false;
    }
  }

  return true;
}

// Zijn alle getallen even?
every([1, 2, 3, 4, 5], (n) => n % 2 === 0);

// Beginnen alle namen met een A
every(
  ['Ans', 'Aaron', 'Anton', 'Anne'],
  (name) => name[0] === 'A'
);