import MatchResult from './MatchResult';
import DataReader from './DataReader';

import { parseDate } from './utils';
import { MatchData } from './MatchData';
import CsvFileReader from './CsvFileReader';

export default class MatchReader {
  public static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  private _matches: MatchData[] | undefined;

  constructor(private reader: DataReader) {}

  public get matches(): MatchData[] {
    if (!this._matches) throw new Error('Not loaded yet');
    return this._matches;
  }

  public load(): void {
    this.reader.read();
    this._matches = this.reader.data.map(this.mapRow);
  }

  private mapRow(row: string[]): MatchData {
    return [
      parseDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
