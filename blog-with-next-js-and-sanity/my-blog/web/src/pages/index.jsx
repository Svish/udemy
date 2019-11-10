import Link from 'next/link';
import groq from 'groq';

import client from '../client';

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to blog</h1>
      {posts.map(p => (
        <li key={p._id}>
          <Link href="/post/[slug]" as={`/post/${p.slug.current}`}>
            <a>{p.title}</a>
          </Link>{' '}
          ({new Date(p._updatedAt).toDateString()})
        </li>
      ))}
    </div>
  );
};

Index.getInitialProps = async () => ({
  posts: await client.fetch(groq`
    *[_type == "post" && publishedAt < now()]|order(publishedAt desc)
  `),
});

export default Index;
