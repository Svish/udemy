import Map from './Map';
import User from './User';
import Company from './Company';

const map = new Map('map');

const user = new User();
map.addMarker(user);

const company = new Company();
map.addMarker(company);
