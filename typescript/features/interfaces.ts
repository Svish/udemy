interface HasSummary {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `A drink with ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: HasSummary): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
