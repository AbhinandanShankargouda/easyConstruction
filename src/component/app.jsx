import React from "react";
import BasicExample from "./navabar";
import Header from "./header";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbord from "./pages/dashbord";
import Attendence from "./pages/attendence"
import Projects from "./pages/projects";
import Labours from "./pages/labours";
import Drawings from "./pages/drawings";
import { Col, Container, Row } from 'react-bootstrap';
import Breadcrumbs from './breadcrum'

function App() {
    return (
        <>
            <div className="flexbox-container">
                <Container fluid>
                    <Row>
                        <Col className="col col-lg-12 col-md-12 sm-12"><BasicExample /></Col>
                        <Col className="col col-lg-12 col-md-12 sm-12" >
                            <Routes>
                                <Route path='/' caseSensitive={false} element={<Dashbord />} />
                                <Route path='/projects' caseSensitive={false} element={<Projects />} />
                                <Route path='/projects/labours' caseSensitive={false} element={<Labours />} />
                                <Route path='/projects/attendence' caseSensitive={false} element={<Attendence />} />
                                <Route path='/projects/drawings' caseSensitive={false} element={<Drawings />} />
                            </Routes></Col>
                    </Row>

                </Container>



            </div></>


    );
}
export default App