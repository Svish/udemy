import SortableCollection from './SortableCollection';

class Node {
  public next: Node | null = null;
  constructor(public data: number) {}
}

export default class LinkedList extends SortableCollection {
  private head: Node | null = null;

  constructor(data?: number[]) {
    super();
    if (data instanceof Array) for (const n of data) this.add(n);
  }

  asArray(): number[] {
    const arr: number[] = [];

    let node: Node | null = this.head;
    while (node !== null) {
      arr.push(node.data);
      node = node.next;
    }

    return arr;
  }

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) tail = tail.next;

    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let tail = this.head;
    while (tail.next) {
      length++;
      tail = tail.next;
    }

    return length;
  }

  private at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds; List is empty');
    }
    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter++ === index) {
        return node;
      }

      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.at(leftIndex).data;
    this.at(leftIndex).data = this.at(rightIndex).data;
    this.at(rightIndex).data = leftHand;
  }
}
