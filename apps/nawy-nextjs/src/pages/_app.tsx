import { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
import '../styles/global.css';


const poppins = Poppins({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;