export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        The text in this paragraph is blue, and the nested span overrides
        that inherited color with{" "}
        <span className="wd-fg-color-black">black text of its own</span>
      </p>
      <p className="wd-fg-color-blue">
        This paragraph has a blue foreground color
        <span className="wd-fg-color-white"> and this text is white</span>
    </p>
    </div>
  );
}