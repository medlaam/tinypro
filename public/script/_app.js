import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.goatcounter.count({
        path: router.asPath
      });
    }
  }, [router]);

  return (
    <Component {...pageProps} />
  );
}