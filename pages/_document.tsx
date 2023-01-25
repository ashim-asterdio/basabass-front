import Document, { Html, Head, Main, NextScript } from 'next/document'
// import {ProductSans} from "../public/Fonts/Product Sans/ProductSans-Regular.ttf"

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
                    <link rel='icon' type='image/png' href="/Favicon.png" />
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