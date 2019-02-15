import Document, { Head, Main, NextScript } from 'next/document';
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        // Step 1: Create an instance of ServerStyleSheet
        const sheet = new ServerStyleSheet();

        // Step 2: Retrieve styles from components in the page
        const page = renderPage((App) => (props) =>
        sheet.collectStyles(<App {...props} />),
        );

        // Step 3: Extract the styles as <style> tags
        const styleTags = sheet.getStyleElement();

        // Step 4: Pass styleTags as a prop
        return { ...page, styleTags };
    }

    render() {
        return (
        <html>
            <Head>
                {this.props.styleTags}
                <link href="/static/styles.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            </Head>
            <body>
            <Main />

            <NextScript />
            </body>
        </html>
        );
    }
}