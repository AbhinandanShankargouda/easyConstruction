import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useState } from 'react';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Breadcrumbs from '../breadcrum';
import Header from "../header"
import { Row } from 'react-bootstrap';
const images = [{
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    name: "Plan1"
},
{
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    name: "Plan2"
},
{
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    name: "Plan3"
},
{
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    name: "Plan4"
},
{
    img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    name: "Plan5"
}
];

const figurecaption = {
    textAlign: 'center',
    fontWeigth: "Bolder",
    fontSize: "20px",
    fontFamily: "Ubuntu"
}

const createButton = {
    position: "relative",
    bottom: '40px'
}


function Drawings() {
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }
    function clearInput() {
        document.getElementById("Form").reset();
    }
    function handleClick(event) {
        event.preventDefault();
        alert("File is created")
        clearInput()
    }


    return (
        <><div id="main" >
            <Row>
                <Header />
            </Row>
            <Breadcrumbs />
            <button style={createButton} type="button" class="btn btn-primary float-end" data-toggle="modal" data-target="#exampleModalCenters">
                Create
            </button>
            <form className="form-inline my-2 my-lg-0 float-end searchbar" >
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-lg " type="submit" style={{ position: "relative", left: "10px" }}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
            <PhotoProvider>
                <div className="foo">
                    <div className='serv'>
                        <ul >

                            {images.map((item, index) => (
                                <PhotoView key={index} src={item.img}>

                                    <li className='border_styles'> <img className="foos" src={item.img} alt="plan1" />
                                        <figcaption style={figurecaption}>{item.name}</figcaption></li>


                                </PhotoView>

                            ))}


                        </ul>
                    </div>
                </div>

            </PhotoProvider>


            <div class="modal fade" id="exampleModalCenters" tabindex="-1" role="dialog" aria-labelledby="exampleModalCentersTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Upload File</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>

                        <form id='Form'>
                            <div class="modal-body">
                                <input type="text" placeholder='Name of file ' />
                                <input type="file" onChange={handleChange} />
                            </div>
                        </form>

                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" data-dismiss="modal" onClick={handleClick}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )


}
export default Drawings;
