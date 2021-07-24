export default function Highlights() {
  return (
    <div className="highlights-container" id="highlights-container">
      <h2>HIGHLIGHTS</h2>
      <div className="highlights-section">
        <ul className="testimonial-list">
          <li>
            <div className="testimonial-container">
              <div className="testimonial-image-wrapper">
                <image
                  className="testimonial-image"
                  src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53599be35d38774267afad_peep-68.png"
                  alt="Image of a person"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-heading">
                  <span className="person-name">Person Name</span>, Place
                </div>
                <div className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  dignissim tristique et facilisis tristique diam lacinia
                  tortor, tincidunt. Et sed lectus eget nibh vulputate. Proin
                  morbi.
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="testimonial-container">
              <div className="testimonial-image-wrapper">
                <image
                  className="testimonial-image"
                  src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53599be35d38774267afad_peep-68.png"
                  alt="Image of a person"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-heading">
                  <span className="person-name">Person Name</span>, Place
                </div>
                <div className="testimonial-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  dignissim tristique et facilisis tristique diam lacinia
                  tortor, tincidunt. Et sed lectus eget nibh vulputate. Proin
                  morbi.
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="highlights-card">
          <ul>
            <li>hightlight point 1</li>
            <li> hightlight point 2</li>
            <li>hightlight point 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
