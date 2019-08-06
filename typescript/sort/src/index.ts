import NumberCollection from './NumberCollection';
import CharacterCollection from './CharacterCollection';
import LinkedList from './LinkedList';

const numbers = new NumberCollection([10, 3, -5, 0]);
numbers.sort();
console.log(numbers.data);

const linkedList = new LinkedList([500, -10, -3, 4]);
linkedList.sort();
console.log(linkedList.asArray());

const characters = new CharacterCollection('Xaayb');
characters.sort();
console.log(characters.data);
