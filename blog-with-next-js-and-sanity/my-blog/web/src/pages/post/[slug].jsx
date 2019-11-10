import { useRouter } from 'next/router';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

import client from '../../client';

const imgUrl = source => imageUrlBuilder(client).image(source);

const Post = ({ post }) => {
  return (
    <article>
      <h1>{post.title}</h1>
      <p>
        <img
          src={imgUrl(post.authorImage)
            .width(50)
            .url()}
        />
        {post.author}
      </p>
      <div>
        Posted in:{' '}
        <ul>
          {post.categories.map(x => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </div>

      <BlockContent
        blocks={post.body}
        imageOptions={{ w: 320, h: 240, fit: 'max' }}
        {...client.config()}
      />
    </article>
  );
};

const QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  body,
  "author": author->name,
  "authorImage": author->image,
  "categories": categories[]->title
}`;

Post.getInitialProps = async function(context) {
  const slug = context.query.slug || '';
  const post = await client.fetch(QUERY, { slug });

  return { post };
};

export default Post;
