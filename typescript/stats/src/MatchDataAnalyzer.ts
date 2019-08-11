import { MatchData } from './MatchData';
import WinsAnalysis from './analyzers/Wins';
import ConsoleReport from './reportTargets/Console';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export default class MatchDataAnalyzer {
  public static winsToConsole(teamName: string): MatchDataAnalyzer {
    return new MatchDataAnalyzer(
      new WinsAnalysis(teamName),
      new ConsoleReport()
    );
  }

  constructor(
    private readonly analyzer: Analyzer,
    private readonly outputTarget: OutputTarget
  ) {}

  buildAndPrintReport(matches: MatchData[]) {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
