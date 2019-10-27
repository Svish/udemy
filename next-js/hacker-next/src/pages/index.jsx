import React from 'react';
import fetch from 'isomorphic-unfetch';

import Error from 'next/error';
import StoryList from '../components/StoryList';
import Layout from '../components/Layout';
import Link from 'next/link';

export default class Index extends React.Component {
  static async getInitialProps({ query }) {
    try {
      const page = Number(query.page) || 1;
      const res = await fetch(
        `https://node-hnapi.herokuapp.com/news?page=${page}`
      );
      const stories = await res.json();
      return { stories, page };
    } catch (err) {
      return { error: true };
    }
  }

  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registered', registration);
        })
        .catch(err => {
          console.warn('service worker failed', err.message);
        });
    }
  }

  render() {
    if (this.props.error) {
      return <Error statusCode={503} />;
    }

    return (
      <Layout
        title="Hacker Next"
        description="A Hacker News clone with Next.js"
      >
        <StoryList stories={this.props.stories} />
        <footer>
          <Link href={`/?page=${this.props.page + 1}`}>
            <a>Next page ({this.props.page + 1})</a>
          </Link>
        </footer>

        <style jsx>{`
          footer {
            padding: 1em;
          }
          footer a {
            font-weight: bold;
            color: black;
            text-decoration: none;
          }
        `}</style>
      </Layout>
    );
  }
}
