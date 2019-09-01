import 'reflect-metadata';

// On object
const plane = {
  color: 'blue',
};
Reflect.defineMetadata('note', 'on object', plane);
console.log(Reflect.getMetadata('note', plane));

// On object property
Reflect.defineMetadata('note', 'on property', plane, 'color');
console.log(Reflect.getMetadata('note', plane, 'color'));

// On class members
@controller
class Plane {
  color: string = 'red';

  @get('/login')
  login(): void {
    console.log('login');
  }
}

function get(path: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

console.log('Path1:', Reflect.getMetadata('path', Plane.prototype, 'login'));

function controller(target: typeof Plane) {
  for (const key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);
    console.log('Path2:', path);
  }
}
