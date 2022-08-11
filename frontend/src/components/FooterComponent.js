import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
      <MDBFooter color="light" className="font-small pt-4 mt-4 footer">
        <div className="container">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h4 className="title">Project Details</h4>
                <p>House of Skincare</p>
                <p>Back-end technologies: Java(Spring Boot, MVC & Security), MySQL</p>
                <p>Front-end technologies: JavaScript(React.js, Bootstrap)</p>
            </MDBCol>
            <MDBCol md="6" className="float-right">
              <h5 className="title">My Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://www.linkedin.com/in/srija-rajaganth-4b2295216" target="_blank">LinkedIn</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://github.com/Srija-R" target="_blank">GitHub</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </div>
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href=""> Srija R.</a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
export default class FooterComponent extends React.Component {
    

    render() {
        return (
            FooterPage()
        )
    }
}