import Document, { Head, Main, NextScript } from 'next/document';
import { getServerSideToken, getUserScript } from '../lib/auth';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    const token = await getServerSideToken(ctx.req);

    return { ...props, ...token };
  }

  render() {
    const { user = {} } = this.props;
    console.log(this.props.user);

    return (
      <html>
        <Head />
        <body>
          <Main />
          <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} />
          <NextScript />
        </body>
      </html>
    );
  }
}
