import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";
import Labours from './labours';
import Header, { Homeheader } from "../header"
import $ from 'jquery';
import { Row, Col } from "react-bootstrap"
import { Homebasicexample } from '../navabar';
function Projects() {
    const textstyle = {

        fontFamily: 'ubuntu',
        color: 'black',
        fontSize: "27px",
        textAlign: "left",
        paddingRight: "500px"

    }

    const icons = {
        backgroundColor: "#CEEDC7",
        marginRight: "25px"
    }



    return (<>




        <Row >
            <Homeheader />
        </Row>
        <Row>
            <Col className="col col-lg-2 col-md-4 col-sm-2">
                <Homebasicexample />

            </Col >
            <Col className="col col-lg-10 col-md-8 col-sm-10" style={{ paddingLeft: "3%" }}>

                <Navbar bg="white" expand="lg" >

                    <Nav className="flex-column " >
                        <ul>
                            <li className='itemsname'><Nav.Link style={textstyle} href="/projects/drawings"><FontAwesomeIcon style={icons} icon={faCompassDrafting} /> Drawings</Nav.Link>
                                <p style={{ paddingLeft: "75px" }}>The Disgn of current Project</p></li>
                            <li className='itemsname' >  <Nav.Link style={textstyle} href="/projects/labours"><FontAwesomeIcon style={icons} icon={faUserNurse} />Workers</Nav.Link><p style={{ paddingLeft: "75px" }}>The Disgn of current Project</p></li>
                            <li className='itemsname'><Nav.Link style={textstyle} href="/projects/attendence"><FontAwesomeIcon style={icons} icon={faClipboardUser} />Attendence</Nav.Link><p style={{ paddingLeft: "75px" }}>The Disgn of current Project</p></li>
                            <li className='itemsname'><Nav.Link style={textstyle} href="#pricing"><FontAwesomeIcon style={icons} icon={faClipboardUser} />Materials</Nav.Link>
                                <p style={{ paddingLeft: "75px" }}>The Disgn of current Project</p></li>
                        </ul>
                    </Nav>

                </Navbar>

            </Col>

        </Row>








    </>

    )

}


export default Projects