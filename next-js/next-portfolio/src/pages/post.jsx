import Layout from '../components/Layout';
import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();

  return (
    <Layout title={router.query.title}>
      <p style={{ width: '80vw' }}>
        Tenetur voluptas iure asperiores quisquam quae quia corporis sit
        consequatur. Autem dolores nisi non quos voluptatum voluptas. Quod fugit
        aperiam nemo omnis fuga qui.
      </p>
    </Layout>
  );
};
