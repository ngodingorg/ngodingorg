export default {
  logo: <span>ngoding.org</span>,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – ngoding.org",
    };
  },
  project: {
    link: "https://github.com/ngodingorg/ngodingorg",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="ngoding.org" />
      <meta
        property="og:description"
        content="Belajar pemrogramana gratis untuk semua"
      />
    </>
  ),
  footer: {
    text: (
      <span>
        (c) {new Date().getFullYear()}{" "}
        <a href="https://github.com/ngodingorg/ngodingorg" target="_blank">
          ngoding.org dan semua kontributor
        </a>
      </span>
    ),
  },
};
