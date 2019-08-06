export interface Location extends google.maps.ReadonlyLatLngLiteral {}

export interface Mappable {
  location: Location;
  markerContent(): string;
}

export default class Map {
  private map: google.maps.Map;

  constructor(elementOrId: string | Element) {
    const element =
      typeof elementOrId === 'string'
        ? document.getElementById(elementOrId)
        : elementOrId;

    this.map = new google.maps.Map(element, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  public addMarker(subject: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.map,
      position: subject.location,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: subject.markerContent(),
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }
}
