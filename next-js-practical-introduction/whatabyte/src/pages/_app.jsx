import NextApp from 'next/app';
import Layout from '../components/Layout';

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}
