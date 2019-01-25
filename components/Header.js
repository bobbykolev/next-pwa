import Link from 'next/link';
import Head from 'next/head';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
      <Head>
        <title>Next PWA</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="next pwa" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="theme-color" content="#286090" />
        <meta name="msapplication-navbutton-color" content="#286090" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#286090" />
        <meta name="apple-mobile-web-app-title" content="VP" />
        <meta http-equiv="pragma" content="no-cache" />
        <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
        <link rel="apple-touch-icon" sizes="192x192" href="/static/pwa-icon.png" />
        <link rel="icon" sizes="192x192" href="/static/pwa-icon.png"/>
        <link rel="manifest" href="_next/static/manifest.json" />
      </Head>
        <Link prefetch href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link prefetch href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header
