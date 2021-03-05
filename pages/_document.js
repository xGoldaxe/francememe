import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang="fr">
        <Head>
            <title>FRANCE MEMES - Le lieu pour vos memes</title>
            <meta name="viewport" content="width=1.0, initial-scale=1.0"/>
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