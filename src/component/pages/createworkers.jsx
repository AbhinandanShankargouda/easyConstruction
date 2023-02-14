import { Container } from "react-bootstrap";
import { Col, Row } from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
const getLocalItem1 = () => {
    let list = localStorage.getItem('Firstname')
    if (list) {
        return JSON.parse(localStorage.getItem('FirstName'))
    } else {
        return [];
    }
}
const getLocalItem2 = () => {
    let list = localStorage.getItem('Lastname')
    if (list) {
        return JSON.parse(localStorage.getItem('Lastname'))
    } else {
        return [];
    }
}
const getLocalItem3 = () => {
    let list = localStorage.getItem('Age')
    if (list) {
        return JSON.parse(localStorage.getItem('Age'))
    } else {
        return [];
    }
}
const getLocalItem4 = () => {
    let list = localStorage.getItem('Phone')
    if (list) {
        return JSON.parse(localStorage.getItem('Phone'))
    } else {
        return [];
    }
}
const getLocalItem5 = () => {
    let list = localStorage.getItem('Adress')
    if (list) {
        return JSON.parse(localStorage.getItem('Adress'))
    } else {
        return [];
    }
}



function Createworkers() {

    const [user, setUser] = useState({ fname: "", lname: "", age: "", phone: "", adress: "" });

    function handleChange(event) {
        setUser({ ...user, [event.target.fname]: event.target.value })
    }
    function handleClick(event) {
        event.preventDefault();
        alert("Worker profile is created")
    }


    return <>
        <Container>

            <div class="registration-form">
                <form>
                    <div class="form-icon">
                        <span><i class="icon icon-user"></i></span>
                    </div>
                    <div class="form-group">
                        <input class="form-control item" id="username" placeholder="First Name"
                            onChange={handleChange}
                            type="text"
                            name='fname' autoComplete="off" />
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
                    <div class="form-group">
                        <button type="button" class="btn btn-block create-account" onClick={handleClick}>Submit</button>
                    </div>
                </form>
            </div>
        </Container >
    </>
}

export default Createworkers;

