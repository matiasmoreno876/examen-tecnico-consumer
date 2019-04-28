export class Category {
  path = '';

  constructor(array: string[]) {
    const length = array.length;
    array.forEach((val, index) => {
      if (index < length - 1) {
        this.path += val + ' > ';
      } else {
        this.path += val;
      }
    });
  }
}
