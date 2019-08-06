import faker from 'faker';
import { Mappable, Location } from './Map';

export default class Company implements Mappable {
  readonly companyName: string;
  readonly catchPhrase: string;
  readonly location: Location;

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  public markerContent(): string {
    return `<b>Company:</b> ${this.companyName}<br>${this.catchPhrase}`;
  }
}
