import React from "react";
import Header from "../header"
import { Row } from "react-bootstrap"
import BasicExample from "../navabar";
import { Homeheader } from "../header";
import { Homebasicexample } from "../navabar";
function Dashbord() {
    return (
        <>

            <Row>
                <Homeheader />
            </Row>
            <Homebasicexample />


        </>
    )
}
export default Dashbord