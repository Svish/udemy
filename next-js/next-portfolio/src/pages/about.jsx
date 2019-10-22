import { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';
import Error from './_error';

const url = 'https://api.github.com/users/svish';

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch(url);
    const statusCode = res.status >= 400 ? res.status : false;
    const data = await res.json();
    return { user: data, statusCode };
  }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>
          GitHub: <a href={user.html_url}>{user.name}</a>
        </p>
        <img src={user.avatar_url} alt="GitHub avatar" height="300px" />
        <img
          src="static/javascript-logo-E967E87D74-seeklogo.com.png"
          alt="JS Logo"
          height="300px"
        />
      </Layout>
    );
  }
}
