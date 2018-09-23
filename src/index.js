class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.comparator = (a, b) => a - b;
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return [...this.arr]
  }

  sort(indices) {
    // your implementation
    indices.sort((a, b) => a - b);

    let newArr = [];
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < indices.length; j++) {
        if (i === indices[j]) {
          newArr.push(this.arr[i])
        }
      }
    }

    newArr.sort(this.comparator);

    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < indices.length; j++) {
        if (i === indices[j]) {
          this.arr[i] = newArr[j]
        }
      }
    }

    return this.arr;
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;