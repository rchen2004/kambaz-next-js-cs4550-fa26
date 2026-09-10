export default function HeadingTags() {
  return (
    <div id="wd-h-tag">
      <h4>Heading Tags</h4>
      Text documents are often broken up into several sections and subsections.
      Each section is usually prefaced with a short title or heading that
      attempts to summarize the topic of the section it precedes. For instance
      this paragraph is preceded by the heading Heading Tags. The font of the
      section headings are usually larger and bolder than their subsection
      headings. This document uses headings to introduce topics such as HTML
      Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used
      to format plain text so that it renders in a browser as large headings.
      There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and
      h6. Tag h1 is the largest heading and h6 is the smallest heading. A{" "}
      <span id="wd-inline-span">span</span> sits in this sentence without
      starting a new line.

      <div id="wd-your-heading">
        <h4>Ryan</h4>
        Hello there. My name is Ryan and I am a student at Northeastern University.
        I am originally from New York so home is pretty close to me.
        I love to watch <span id="wd-your-span"> movies</span>.
      </div>

      <div id="wd-ai-headings">
        <h4>Lab notes</h4>
        This section collects short observations recorded while working through
        the exercises.
        <h5>What I built</h5>
        A small page that demonstrates each of the heading tags alongside a
        few inline elements.
        <h6>Next step</h6>
        Continue with the remaining exercises and add the new examples to this
        same page.
      </div>
    </div>
  );
}