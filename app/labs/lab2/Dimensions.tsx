export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div className="wd-dimension-rectangle wd-bg-color-green">Rectangle kjashdjkahsdkjhasjkdhasjkdhasjkd</div>
        <div id="wd-ai-dimension" className="wd-dimension-fixed wd-bg-color-yellow">
          This box has a declared width of 120px and height of 60px, and
          this sentence is long enough that it would wrap onto several
          lines if the box were forced to grow, making the fixed size
          obvious.
        </div>
      </div>
    </div>
    
  );
}