import React, { useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import $ from 'jquery'

function Header() {
    var CustomSize = {

        backgroundColor: "#658864",
        padding: "20px",
        marginBottom: "5px",
        fontFamily: 'Merriweather',
        borderRadius: "10px",
        paddingLeft: "100px",
        position: "relative",
    }
    const [state, setState] = useState(false);



    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        setState(value => !value);


    }
    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
    function Openmenue() {
        return <>
            <div><button className="openbtn" onClick={openNav}></button></div>
        </>
    }
    function Closemenue() {
        return <>
            <button className="openbtn" onClick={closeNav}></button>
        </>
    }

    return <>
        <div style={CustomSize}>
            <Row>
                <Col className="col col-lg-1 col-md-2 col-sm-3" style={{ positon: "relative", right: "50px" }}>
                    <div><button className="openbtn" onClick={openNav}>
                        ☰
                    </button></div>
                    {state ? closeNav() : ""}



                </Col>
                <Col className="col col-lg-10 col-md-9 col-sm-3">
                    <header><h4 style={{ color: "white", position: "relative", right: "150px" }}>Brand Name</h4></header>
                </Col>
                <Col className="col col-lg-1 col-md-1 col-sm-3 float-end" >

                    <Button variant="secondary" style={{ borderRadius: "50%" }}><FontAwesomeIcon icon={faUser} /></Button>


                </Col>

            </Row >

        </div>


    </>


}
function Homeheader() {
    var CustomSize = {

        backgroundColor: "#658864",
        padding: "20px",
        marginBottom: "5px",
        fontFamily: 'Merriweather',

        paddingLeft: "100px",
        position: "relative",
    }
    return <>

        <div style={CustomSize} className="col col-lg-12 col-md-12 col-sm-12" >
            <Row>
                <Col className="col col-lg-1 col-md-2 col-sm-3" style={{ positon: "relative", right: "50px" }}>
                    <div><button className="openbtn" >
                        ☰
                    </button></div>


                </Col>
                <Col className="col-lg-10  col-md-8 col-sm-3">
                    <header><h4 style={{ color: "white", position: "relative", right: "150px" }}>Brand Name</h4></header>
                </Col>
                <Col className="col-lg-1  col-md-2 col-sm-3 float-end" >

                    <Button variant="secondary" style={{ borderRadius: "50%" }}><FontAwesomeIcon icon={faUser} /></Button>


                </Col>

            </Row >

        </div></>
}
export default Header
export { Homeheader }
