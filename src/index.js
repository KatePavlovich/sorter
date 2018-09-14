class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
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
    let newArr = [];
    for (let i = 0; i < this.arr.length; i++) {
      for (let j = 0; j < indices.length; j++) {
        if (i === indices[j]) {
          newArr.push(this.arr[i])
        }
      }
    }
    //if (indices.length>1) {
    if (indices[0] < indices[1]) {
      newArr.sort((a, b) => a - b);
    } else {
      newArr.sort((a, b) => b - a);
    }
  //}

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
  }
}

module.exports = Sorter;