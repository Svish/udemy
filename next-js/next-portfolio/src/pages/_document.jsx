import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="My portfolio" />
          <meta name="viewport" content="width=device-width" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            integrity="sha256-pMhcV6/TBDtqH9E9PWKgS+P32PVguLG8IipkPyqMtfY="
            crossorigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <style jsx>{`
          body {
            margin: 0;
            font-size: 110%;
            font-family: 'Roboto', sans-serif;
            background: #f0f0f0;
          }
        `}</style>
      </html>
    );
  }
}
