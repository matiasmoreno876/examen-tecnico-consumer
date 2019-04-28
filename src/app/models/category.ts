export class Category {
  path = '';

  constructor(array: string[]) {
    array.forEach(val => {
      this.path += val + ' > ';
    });
  }
}
