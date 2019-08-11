import fs from 'fs';
import path from 'path';

import { OutputTarget } from '../MatchDataAnalyzer';

export default class HtmlReport implements OutputTarget {
  constructor(private readonly path: string) {}

  public print(report: string): void {
    const html = `
    <div>
      <h1>Analysis Output</h1>
      <div>${report}</div>
    </div>
    `;

    const dir = path.dirname(this.path);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(this.path, html, { encoding: 'utf-8' });
  }
}
