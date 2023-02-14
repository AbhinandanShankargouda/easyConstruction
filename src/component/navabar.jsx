import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { routes } from "./breadcrum";
import useBreadcrumbs from "use-react-router-breadcrumbs";
import { event } from 'jquery';


const getLocalItems = () => {
    let list = localStorage.getItem('projectname')
    if (list) {
        return JSON.parse(localStorage.getItem('projectname'))
    } else {
        return [];
    }
}


function BasicExample() {
    var customStyle = {
        fontFamily: 'Ubuntu',
        borderRadius: "10px",
        marginRight: "100px",
    }

    var contentCOlStyle = {
        backgroundColor: "#ECE8DD",
        marginLeft: '135px',
        paddingBottom: "600px"
    }

    const [name, setName] = useState('');
    const [headingText, setHeading] = useState(getLocalItems());
    function handleChange(event) {
        setName(event.target.value);
    }
    function clearInput() {
        document.getElementById("#form").reset();
    }
    function handleClick(event) {
        if (!name) {

        } else {
            setHeading([...headingText, name])
            event.preventDefault();
            alert("Project succusefuly Created");
            clearInput();
        }

    }
    useEffect(() => {
        localStorage.setItem('projectname', JSON.stringify(headingText));
    }, [headingText])






    return (

        <>
            <div id="mySidebar" class="sidebar ">
                <Navbar bg="white" expand="lg">

                    <Nav className="flex-column w-10 " style={customStyle}>
                        <Sidebar className="col-lg-1 widthMenue" style={{ fontSize: '20px', width: "250px" }}>
                            <Menu style={{ backgroundColor: "white" }}>
                                <MenuItem className='menu-item'>  <button type="button" class="createNewProjectName navbarContent" data-toggle="modal" data-target="#exampleModalCenter">
                                    Create Project <FontAwesomeIcon style={{ paddingLeft: "30px" }} icon={faPlus} />
                                </button></MenuItem>
                                <SubMenu className='Nav.link menu-item' style={{ color: 'black' }} label="My Projects">
                                    {
                                        headingText.map((elem, ind) => {
                                            return (
                                                <MenuItem key={ind}><Nav.Link className='menu-item ' style={{ color: 'black', overflow: "hidden" }} href="/projects">{elem}</Nav.Link></MenuItem>
                                            )
                                        })
                                    }

                                </SubMenu>
                            </Menu>
                        </Sidebar>
                    </Nav>

                </Navbar >
            </div>


            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title navbarContent" id="exampleModalLongTitle">Create New Project</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body form-group">
                            <form id="Form">
                                <textarea class="form-control" id="recipient-name" placeholder='Enter the Project name' onChange={handleChange}
                                    type="text"
                                    value={name}
                                />
                            </form>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={handleClick}>Save</button>

                        </div>
                    </div>
                </div>
            </div>


        </>


    );
}

function Homebasicexample() {

    var customStyle = {
        fontFamily: 'Ubuntu',
        borderRadius: "10px",
        marginRight: "100px",
    }

    var contentCOlStyle = {
        backgroundColor: "#ECE8DD",
        marginLeft: '135px',
        paddingBottom: "600px"
    }

    const [name, setName] = useState('');
    const [headingText, setHeading] = useState(getLocalItems());
    function handleChange(event) {
        setName(event.target.value);
    }
    function handleClick() {
        if (!name) {

        } else {
            setHeading([...headingText, name])
            alert("Project succusefuly Created");
        }

    }
    useEffect(() => {
        localStorage.setItem('projectname', JSON.stringify(headingText));
    }, [headingText])
    return (

        <>

            <Navbar bg="white" expand="lg" className="col col-lg-2 col-md-12 col-sm-12">

                <Nav className="flex-column w-10 " style={customStyle}>
                    <Sidebar className="col-lg-1 widthMenue" style={{ fontSize: '20px', width: "250px" }}>
                        <Menu style={{ backgroundColor: "white" }}>
                            <MenuItem className='menu-item'>  <button type="button" class="createNewProjectName navbarContent" data-toggle="modal" data-target="#exampleModalCenter">
                                Create Project <FontAwesomeIcon style={{ paddingLeft: "30px" }} icon={faPlus} />
                            </button></MenuItem>
                            <SubMenu className='Nav.link menu-item' style={{ color: 'black' }} label="My Projects">
                                {
                                    headingText.map((elem, ind) => {
                                        return (
                                            <MenuItem key={ind}><Nav.Link className='menu-item ' style={{ color: 'black', overflow: "hidden" }} href="/projects">{elem}</Nav.Link></MenuItem>
                                        )
                                    })
                                }

                            </SubMenu>
                        </Menu>
                    </Sidebar>
                </Nav>

            </Navbar >



            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title navbarContent" id="exampleModalLongTitle">Create New Project</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body form-group">
                            <textarea class="form-control" id="recipient-name" placeholder='Enter the Project name' onChange={handleChange}
                                type="text"
                                value={name} />
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={handleClick}>Save</button>

                        </div>
                    </div>
                </div>
            </div>


        </>


    );
}

export default BasicExample;
export { Homebasicexample }

