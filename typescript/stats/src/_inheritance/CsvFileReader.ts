import fs from 'fs';

export default abstract class CsvFileReader<TData> {
  private _data: TData[] | undefined;

  constructor(public readonly filename: string) {}

  protected abstract mapRow(row: string[]): TData;

  public get data(): TData[] {
    if (!this._data) throw new Error('Data not read yet');
    return this._data;
  }

  public read(): void {
    this._data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string) => row.split(','))
      .map(this.mapRow);
  }
}
