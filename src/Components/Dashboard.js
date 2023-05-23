import react from "react";
import "../styles/Dashboard.css";
import download from "../assets/download.png";
import fullscreen from "../assets/full-screen.png";
import zoom from "../assets/zoom-in.png";
import folder from "../assets/folder.png";
import pencil from "../assets/pen.png";
import write from "../assets/write.png";
import user from "../assets/user.png";
import attachment from "../assets/attachment.png";
import calender from "../assets/calendar.png";
import pentool from "../assets/pen-tool.png";
import text from "../assets/text.png";
import form from "../assets/form.PNG";
import { Row, Col, Button } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div>
      <Row>
        <Col className="toolbar-col" md={1}>
          <div className="tool-tab-selected">
            <img src={pencil} className="tab-img" />
          </div>
          <div className="tool-tab">
            <img src={zoom} className="tab-img" />
          </div>
          <div className="tool-tab">
            <img src={fullscreen} className="tab-img" />
          </div>
          <div className="tool-tab">
            <img src={folder} className="tab-img" />
          </div>
          <div className="tool-tab">
            <img src={download} className="tab-img" />
          </div>
        </Col>
        <Col className="tools-col" md={2}>
          <div className="mt-3">
            <input type="text" className="icon" placeholder="Fill out now" />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="icon-submitted"
              value={"John Doe"}
              placeholder="Fill out now"
            />
          </div>
          <Button className="add-recipt-btn">
            <img className="user-icon" src={user} /> Add Recipt
          </Button>
          <hr />
          <div className="tool-bar-option">
            <span>Signature</span> <img className="tool-icon" src={pentool} />
          </div>
          <div className="tool-bar-option mt-3">
            <span>Text</span> <img className="tool-icon" src={text} />
          </div>
          <div className="tool-bar-option mt-3">
            <span>Date and Time</span>{" "}
            <img className="tool-icon" src={calender} />
          </div>
          <hr />
          <div className="tool-bar-option mt-3">
            <span>Name</span> <img className="tool-icon" src={attachment} />
          </div>
          <div className="tool-bar-option mt-3">
            <span>Email</span> <img className="tool-icon" src={attachment} />
          </div>
          <div className="tool-bar-option mt-3">
            <span>Company</span> <img className="tool-icon" src={attachment} />
          </div>
          <div className="tool-bar-option mt-3">
            <span>Title</span> <img className="tool-icon" src={attachment} />
          </div>
        </Col>
        <Col md={5}>
          <div className="form-div">
            <img className="form-img" src={form} />
            <Button className="submit-btn">Save Changes</Button>
          </div>
        </Col>
        <Col md={2}>Attendees</Col>
        <Col md={1}>Chat</Col>
      </Row>
    </div>
  );
};

export default Dashboard;
