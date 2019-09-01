import Model from '../models/Model';

export type EventHandler = () => void;
export type Events = Record<string, EventHandler>;
export type Regions = Record<string, string>;
export type RegionElements = Record<string, Element>;

export default abstract class View<M extends Model<any>> {
  constructor(protected readonly parent: Element, protected readonly model: M) {
    this.bindModel();
  }

  protected abstract template(): string;

  protected events(): Events {
    return {};
  }

  protected regions(): Regions {
    return {};
  }

  private bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  private bindEvents(fragment: DocumentFragment): void {
    const events = this.events();
    for (const key in events) {
      const [name, selector] = key.split(':', 2);
      fragment
        .querySelectorAll(selector)
        .forEach(element => element.addEventListener(name, events[key]));
    }
  }

  private findRegionElements(fragment: DocumentFragment): RegionElements {
    const elements: RegionElements = {};
    const regions = this.regions();
    for (const key in regions) {
      const selector = regions[key];
      const element = fragment.querySelector(selector);
      if (element) {
        elements[key] = element;
      }
    }
    return elements;
  }

  protected onRender(regionElements: RegionElements): void {}

  public render(): void {
    this.parent.innerHTML = '';

    const tmpl = document.createElement('template');
    tmpl.innerHTML = this.template();

    this.bindEvents(tmpl.content);

    this.onRender(this.findRegionElements(tmpl.content));

    this.parent.append(tmpl.content);
  }
}
