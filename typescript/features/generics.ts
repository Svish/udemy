// Generics with classes
class ArrayOfAnything<T> {
  constructor(private readonly collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const classExplicit = new ArrayOfAnything<string>(['a', 'b', 'c']);
const classInferred = new ArrayOfAnything(['a', 'b', 'c']);

// Generics with functions
function print<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

print<string>(['a', 'b', 'c']);
print(['a', 'b', 'c']);

// Generic constraints
class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a car');
  }
}

interface Printable {
  print(): void;
}

function printPrintables<T extends Printable>(arr: T[]): void {
  arr.forEach(x => x.print());
}

printPrintables<Printable>([new Car(), new House()]);
