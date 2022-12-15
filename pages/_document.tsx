import Document, { Html, Head, Main, NextScript } from 'next/document'
// import {ProductSans} from "../public/Fonts/Product Sans/ProductSans-Regular.ttf"

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    {/* <link href="https://fonts.cdnfonts.com/css/product-sans" rel="stylesheet"></link> */}
                    {/* <link rel="stylesheet" href="https://egkoppel.github.io/product-sans/google-fonts.css"></link> */}
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
                    <link rel='icon' type='image/png' href="/Favicon.png" />
                    {/* <link  href="/Fonts/ProductSans/ProductSans.ttf" as="font"
            type="font/ttf"
            crossOrigin="anonymous" rel="preload" />
                    <link rel="stylesheet"  href="/Fonts/ProductSans/ProductSans.ttf" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument