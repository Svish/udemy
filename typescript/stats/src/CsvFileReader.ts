import fs from 'fs';
import DataReader from './DataReader';

export default class CsvFileReader implements DataReader {
  private _data: string[][] | undefined;

  constructor(public readonly filename: string) {}

  public get data(): string[][] {
    if (!this._data) throw new Error('Data not read yet');
    return this._data;
  }

  public read(): void {
    this._data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string) => row.split(','));
  }
}
