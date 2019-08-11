import { OutputTarget } from '../MatchDataAnalyzer';

export default class ConsoleReport implements OutputTarget {
  public print(report: string): void {
    console.log(report);
  }
}
