import CsvFileReader from './CsvFileReader';
import { parseDate } from '../utils';
import MatchResult from '../MatchResult';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export default class MatchReader extends CsvFileReader<MatchData> {
  protected mapRow(row: string[]): MatchData {
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
