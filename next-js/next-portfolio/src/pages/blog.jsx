import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={slug} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout title="Blog">
    <ul>
      <PostLink slug="react-post" title="React" />
      <PostLink slug="angular-post" title="Angular" />
    </ul>
  </Layout>
);
