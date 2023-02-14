import React from 'react';
import { Button, Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { Row, Col } from 'react-bootstrap';
import Createworkers from './createworkers';
import { firstName, lastName, ages, phones, adresss } from './createworkers';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Breadcrumbs from "../breadcrum";
import Header from "../header";

$(document).ready(function () {
    var firstName = $('#firstName').text();
    var intials = firstName.charAt(0);
    var profileImage = $('#profileImage').text(intials);
});
function Labours() {
    const [user, setUser] = useState({ fname: "", lname: "", age: "", phone: "", adress: "" });
    function clearInput() {
        document.getElementById("Form").reset();
    }
    function handleChange(event) {
        setUser({ ...user, [event.target.fname]: event.target.value })
    }
    function handleClick(event) {
        event.preventDefault();
        alert("Worker profile is create");
        clearInput();

    }

    function buttonClick() {
        return (
            <>
                <input type='file'></input>
            </>
        )
    }
    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }

    return (

        <div id="main" >
            <Row>
                <Header />
            </Row>
            <Breadcrumbs />
            <Row>
                <Col> <button style={{ position: "relative", bottom: "40px" }} type="button" class="btn btn-primary float-end" data-toggle="modal" data-target="#exampleModal"  >
                    Create Worker
                </button>

                </Col>
            </Row>
            <form className="form-inline my-2 my-lg-0 float-end searchbar" >
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-lg my-2 my-sm-0" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
            <div className='serv'>
                <ul className="workersUl">
                    <li  >
                        <div className="border_style">
                            <div className='workers'>
                                <div>
                                    <img className="imagesofWorkers" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" />

                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    <p style={{ fontWeight: "bold" }}>Prajwal Budavi</p>
                                    <p>25</p>
                                    <p>65462656</p>
                                </div>



                            </div>

                        </div>

                    </li>
                    <li  >
                        <div className="border_style">
                            <div className='workers'>
                                <div>
                                    <img className="imagesofWorkers" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" />

                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    <p style={{ fontWeight: "bold" }}>Prajwal Budavi</p>
                                    <p>25</p>
                                    <p>65462656</p>
                                </div>



                            </div>

                        </div>

                    </li> <li  >
                        <div className="border_style">
                            <div className='workers'>
                                <div>
                                    <img className="imagesofWorkers" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" />

                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    <p style={{ fontWeight: "bold" }}>Prajwal Budavi</p>
                                    <p>25</p>
                                    <p>65462656</p>
                                </div>



                            </div>

                        </div>

                    </li> <li  >
                        <div className="border_style">
                            <div className='workers'>
                                <div>
                                    <img className="imagesofWorkers" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" />

                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    <p style={{ fontWeight: "bold" }}>Prajwal Budavi</p>
                                    <p>25</p>
                                    <p>65462656</p>
                                </div>



                            </div>

                        </div>

                    </li>
                    <li  >
                        <div className="border_style">
                            <div className='workers'>
                                <div>
                                    <div id="profileImage" ></div>
                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    <p style={{ fontWeight: "bold" }} id="firstName">Prajwal Budavi</p>
                                    <p>25</p>
                                    <p>65462656</p>

                                </div>





                            </div>

                        </div>

                    </li>

                    <li  >
                        <div className="border_style">
                            <div className='workers'>
                                <div>
                                    <img className="imagesofWorkers" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" />

                                </div>
                                <div style={{ marginLeft: "20px" }}>
                                    <p style={{ fontWeight: "bold" }}>Prajwal Budavi</p>
                                    <p>25</p>
                                    <p>65462656</p>
                                </div>



                            </div>

                        </div>

                    </li>
                </ul>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="registration-form">
                                <form id="Form">
                                    <div class="form-icon">
                                        <span><i class="icon icon-user"></i></span>
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control item" id="username" placeholder="First Name"
                                            onChange={handleChange}
                                            type="text"
                                            name='fname' />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control item" id="password" placeholder="Last Name" onChange={handleChange}
                                            type="text"
                                            name='lname' />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control item" id="email" placeholder="Age" onChange={handleChange}
                                            type="text"
                                            name='age' />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control item" id="phone-number" placeholder="Phone Number" onChange={handleChange}
                                            type="text"
                                            name='phone' />
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control item" id="birth-date" placeholder="Adress" onChange={handleChange}
                                            type="text"
                                            name='adress' />
                                    </div>
                                    <div class="form-group modal-footer">
                                        <button type="button" class="btn btn-block create-account" data-dismiss="modal" onClick={handleClick} >Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div >

        </div>




    )
}

export default Labours