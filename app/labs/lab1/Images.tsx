export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      Loading another image from the internet:
      <br />
      <img
        id="wd-ai-image"
        src="https://apod.nasa.gov/apod/image/2609/M83_Final2_1x1024.jpg"
        width="200px"
        alt="Spiral galaxy M83"
      />

      <br />
      Image of me at the Golden Gate Bridge in San Francisco:
      <br />
      <img
        id="wd-your-image"
        src="/images/golden-gate.jpg"
        alt = "Ryan at the Golden Gate Bridge in SF"
        width="300px"
      />
    </div>
  );
}