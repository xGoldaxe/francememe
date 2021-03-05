import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="fr">
        <Head>
            <meta name="viewport" content="width=1.0, initial-scale=1.0, user-scalable=no" />
            <meta name="description" content="Serveur de meme frances, en francais discord plus gros serveur de memes en france"/>
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