import react, { useEffect, useState } from "react";
import logo from "../assets/camera.png";
import "../styles/Header.css";
import { Button } from "react-bootstrap";
import link from "../assets/link.png";
import man1 from "../assets/man.png";
import man2 from "../assets/man1.png";
import man3 from "../assets/man2.png";
import women from "../assets/woman.png";
const Header = () => {
  const [attendees, setAttendees] = useState([
    {
      img: man1,
    },
    {
      img: man2,
    },
    {
      img: man3,
    },
    {
      img: women,
    },
  ]);

  return (
    <>
      <div className="header-main-div">
        <img className="logo" src={logo} />
        <div className="header-content">
          <span className="meeting-heading">
            Live Session: non-complete agreement
          </span>
          <span className="meeting-description">June 12th 2022 | 11:00 AM</span>
        </div>

        <div>
          <div className="attendees-container">
            {attendees.map((attendee, index) => (
              <>
                <img
                  src={attendee.img}
                  key={index}
                  className="attendee"
                  style={{
                    marginLeft: `${(index - 1) * 30}px`,
                  }}
                />
                <div
                  className="attendee-numbers"
                  style={{
                    marginLeft: `${(4 - 1) * 30}px`,
                  }}
                >
                  {"+9"}
                </div>
              </>
            ))}
          </div>
          <Button className="meeting-link">
            <img className="link-icon" src={link} /> | cem-jnmt-hsu
          </Button>
          <Button className="leave-btn" variant="danger">
            Leave Meating
          </Button>
        </div>
      </div>
    </>
  );
};
export default Header;
