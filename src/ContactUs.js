import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faPhoneAlt, faEnvelope);

export default function ContactUs() {
  return (
    <div className="contactus-container" id="contactus-container">
      <h2>CONTACT US</h2>
      <div className="contactus-section">
        <div className="contactus-heading">
          Reach us between <span className="time">9am and 6pm</span> at
        </div>
        <div className="contactus-card">
          <ul>
            <li>Address Line 1</li>
            <li>Address Line 2</li>
            <li>Ernakulam, Kerala</li>
            <li>
              <div className="phone">
                <div className="phone-icon">
                  <FontAwesomeIcon icon={["fas", "phone-alt"]} size="1x" />
                </div>
                <div className="phone-number">Phone Number</div>
              </div>
            </li>
            <li>
              <div className="email">
                <div className="email-icon">
                  <FontAwesomeIcon icon={["fas", "envelope"]} size="1x" />
                </div>
                <div className="email-address">Email Address</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
