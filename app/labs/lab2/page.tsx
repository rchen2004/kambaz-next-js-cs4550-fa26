import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";

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
    <div id="wd-css-document-structure">
  <div className="wd-selector-1">
    <h3>Document structure selectors</h3>
    <div className="wd-selector-2">
      Selectors can be combined to refer elements in particular
      places in the document
      <p className="wd-selector-3">
        This paragraph&apos;s red background is referenced as
        <br />
        .selector-2 .selector3
        <br />
        meaning the descendant of some ancestor.
        <br />
        <span className="wd-selector-4">
          Whereas this span is a direct child of its parent
        </span>
        <span className="wd-ai-selector-5">
          <br />
          And this span is styled by a descendant rule, so it only needs
          some ancestor with class wd-selector-1 rather than a particular
          parent
        </span>
        <span className="wd-my-selector">
          <br />
          This is just to prove that I understand the relationship between the span and its parent. It is a direct child of its parent, which is the paragraph with class wd-selector-3.
        </span>
        <br />
        You can combine these relationships to create specific
        styles depending on the document structure
      </p>
    </div>
  </div>
</div>
    <div id="wd-css-cascade">
      <h3>Style precedence</h3>
      <p id="wd-ai-cascade" className="wd-ai-cascade">
        This paragraph is matched by a tag rule, a class rule, and an id
        rule that all set a different background color. The id rule wins
        because id selectors are more specific than class or tag
        selectors.
      </p>
    </div>
    <ForegroundColors />
    <BackgroundColors />
    <Borders />
    <Padding />
    <Margins />
    <BoxModel />
    <Corners />
    <Dimensions />
    <Display />
    <Positions />
    <Zindex />
    <Float />
    <GridLayout />
    <Flex />
    <MediaQueriesDemo />
    </div>
  );
}