import View from './View';
import Collection from '../models/Collection';

export default abstract class CollectionView<T, D> {
  constructor(
    private readonly parent: Element,
    private readonly collection: Collection<T, D>
  ) {}

  protected abstract renderItem(model: T, itemParent: Element): void;

  public render(): void {
    this.parent.innerHTML = '';

    const tmpl = document.createElement('template');

    for (const model of this.collection.all) {
      const itemParent = document.createElement('div');
      this.renderItem(model, itemParent);
      tmpl.content.append(itemParent);
    }

    this.parent.append(tmpl.content);
  }
}
