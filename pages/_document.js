import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>VQ Front End Developer</title>
      <meta
        name="description"
        content="A Frontend Web Developer crafting fast, responsive websites with Next.js — plus smart CMS integration for easy content management and development skills."
      />
      <link rel="icon" href="/images/iconv2.webp" />
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
