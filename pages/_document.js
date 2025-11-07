import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <title>VQ Front End Developer</title>
      <meta
        name="description"
        content="Overview of my background, projects, and current programming and web development skills."
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
