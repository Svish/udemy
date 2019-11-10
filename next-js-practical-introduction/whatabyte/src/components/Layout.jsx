import Head from 'next/head';

import './index.scss';
import './Layout.scss';

import Header from './Header';
import NavBar from './NavBar';

const NAME = 'WHATABYTE';

const Layout = props => {
  return (
    <div className="Layout">
      <Head>
        <title>{NAME}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <Header title={`> ${NAME}`} />
      <div className="Content">{props.children}</div>
      <NavBar />
    </div>
  );
};

export default Layout;
