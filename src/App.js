import "minireset.css";
import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";

import Highlights from "./Highlights";
import Services from "./Services";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

library.add(faMapMarkerAlt);

export default function App() {
  return (
    <div className="App">
      <div className="app-wrapper">
        <header className="header-class">
          <div className="company-logo">
            <h2>Company Name</h2>
          </div>
          <nav className="nav-class">
            <div className="nav-link">
              <Link
                to="contactus-container"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                Apply
              </Link>
            </div>{" "}
            |{" "}
            <div className="nav-link">
              <Link
                to="contactus-container"
                spy={true}
                smooth={true}
                duration={500}
                offset={-50}
              >
                Login
              </Link>
            </div>
          </nav>
        </header>
        <div className="main-container">
          <section className="link-list">
            <ul>
              <li>
                <div>
                  <Link
                    to="highlights-container"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    HIGHLIGHTS
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <Link
                    to="services-container"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    SERVICES
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <Link
                    to="aboutus-container"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    ABOUT US
                  </Link>
                </div>
              </li>
              <li>
                <div>
                  <Link
                    to="contactus-container"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                  >
                    CONTACT US
                  </Link>
                </div>
              </li>
            </ul>
          </section>
          <main>
            <div className="hero">
              <p>
                We bring you close to the opportunities to work as a nurse in UK
                in the most transparent and reliable way
              </p>
            </div>
            <div className="details-section">
              <div className="location">
                <div>Based on Kochi </div>
                <div
                  className="location-icon"
                  onClick={() => {
                    const url = "https://googlemaps.com";
                    window.open(url, "_blank");
                  }}
                >
                  <FontAwesomeIcon
                    icon={["fas", "map-marker-alt"]}
                    size="2x"
                    className="fa-location-custom"
                  />
                </div>
              </div>
              <div className="registration"> Registered at ABC, 123456789</div>
            </div>
          </main>
        </div>
        <Services />
        <Highlights />
        <AboutUs />
        <ContactUs />
      </div>
    </div>
  );
}
