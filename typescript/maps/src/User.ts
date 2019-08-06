import faker from 'faker';
import { Mappable, Location } from './Map';

export default class User implements Mappable {
  readonly name: string;
  readonly location: Location;

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  public markerContent(): string {
    return `<b>User:</b> ${this.name}`;
  }
}
