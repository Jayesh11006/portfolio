import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/icon/Jayesh.JPG";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icon/pngegg.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jayesh-nikam-28154b264/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/Jayesh11006"><img src={navIcon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
