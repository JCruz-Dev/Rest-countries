import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
    <Html>
        <Head>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
                rel='preconnect'
                href='https://fonts.gstatic.com'
                crossOrigin='true'
            />
            <link
                href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&family=Poppins:wght@200;400;600&display=swap'
                rel='stylesheet'
            />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
);

export default Document;
