import { Analyzer } from '../MatchDataAnalyzer';
import { MatchData } from '../MatchData';
import MatchResult from '../MatchResult';

export default class WinsAnalysis implements Analyzer {
  constructor(private readonly team: string) {}

  public run(matches: MatchData[]): string {
    let wins = 0;

    for (const match of matches) {
      const isHomeWin =
        match[1] === this.team && match[5] === MatchResult.HomeWin;
      const isAwayWin =
        match[2] === this.team && match[5] === MatchResult.AwayWin;

      if (isHomeWin || isAwayWin) wins++;
    }

    return `Team ${this.team} won ${wins} games`;
  }
}
