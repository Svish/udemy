import Layout from '../components/Layout';

export default ({ statusCode }) => (
  <Layout title="Error">
    <p>
      {statusCode
        ? `Could not load user data: Status code ${statusCode}`
        : `Page not found, sorry!`}
    </p>
  </Layout>
);
