import sanityClient from '@sanity/client';

import { api } from '../../studio/sanity.json';

export default sanityClient({
  ...api,
  useCdn: true,
});
