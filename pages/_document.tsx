import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta
            name='msapplication-config'
            content='/assets/favicons/browserconfig.xml'
          />
          <meta name='theme-color' content='#ffffff' />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/assets/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/assets/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/assets/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/assets/favicons/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/assets/favicons/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          <link rel='shortcut icon' href='/assets/favicons/favicon.ico' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin=''
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
