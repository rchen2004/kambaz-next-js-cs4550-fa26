import "./index.css";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p id="wd-ai-style-attr" style={{ backgroundColor: "purple", color: "white" }}>
        This paragraph uses the style attribute to set a purple background
        with white text. Inline styles like this one override styles coming
        from stylesheets, which makes them hard to maintain across a site.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow"}}>
        Hello there. This is a paragraph that should have the background color as green and text color as yellow. This was set
        explicitly in the style attribute of this paragraph. You should avoid using the style attribute and instead use CSS classes to style your elements.
      </p>
      <div id="wd-css-id-selectors">
    <h3>ID selectors</h3>
    <p id="wd-id-selector-1">
    Instead of changing the look and feel of all the
    elements of the same name, e.g., P, we can refer to a
    specific element by its ID
    </p>
    <p id="wd-id-selector-2">
    Here&apos;s another paragraph using a different ID and a
    different look and feel
    </p>
    <p id="wd-ai-id-selector">
    This paragraph is targeted by an ID selector too, so only this
    one element picks up its background and text color from the
    stylesheet rule that matches its ID.
    </p>
    <p id="wd-id-selector-3">
    This is a third paragraph with yet another ID and a
    unique look and feel.
    </p>
    </div>
    <div id="wd-css-class-selectors">
  <h3>Class selectors</h3>
  <p className="wd-class-selector">
    Instead of using IDs to refer to elements, you can use an
    element&apos;s CLASS attribute
  </p>
  <h4 className="wd-class-selector">
    This heading has same style as paragraph above
  </h4>
  <p className="wd-ai-class-selector">
    A class can be reused on any number of elements, so this paragraph
    and the heading below share one rule
  </p>
  <h4 className="wd-ai-class-selector">
    This heading uses the same class as the paragraph above
  </h4>
    </div>
    <div>
        <h4 className="wd-your-class">
        This heading has same style as paragraph below. You should create your own class and use it to style this heading.
        </h4>
        <p className="wd-your-class">
        This paragraph has same style as heading above. You should create your own class and use it to style this paragraph.
        </p>
    </div>
    </div>
    
  );
}