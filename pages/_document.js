import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          
          
        </Head>
        <body>
          <Main />
          <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-p34f1UUtsS3wqzfto5wAAmdvj+osOnFyQFpp4Ua3gs/ZVWx6oOypYoCJhGGScy+8"
            crossOrigin="anonymous"
          ></script>
          <script
            src="https://unpkg.com/swup@latest/dist/swup.min.js"
          ></script>
          <script src="../swup.js"></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
