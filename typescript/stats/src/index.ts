import MatchReader from './MatchReader';
import MatchDataAnalyzer from './MatchDataAnalyzer';
import WinsAnalysis from './analyzers/Wins';
import HtmlReport from './reportTargets/Html';

const matchReader = MatchReader.fromCsv('data/football.csv');
matchReader.load();

const analyzer = MatchDataAnalyzer.winsToConsole('Man United');
analyzer.buildAndPrintReport(matchReader.matches);

new MatchDataAnalyzer(
  new WinsAnalysis('Man United'),
  new HtmlReport('build/report.html')
).buildAndPrintReport(matchReader.matches);
