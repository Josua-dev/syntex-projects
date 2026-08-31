import '@/components/LanguageSelector';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LanguageSelector />
      <Component {...pageProps} />
    </>
  );
}