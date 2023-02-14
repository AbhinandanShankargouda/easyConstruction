import React from "react";
import ReactDom from "react-dom";
import App from "./component/app";
import BasicExample from "./component/navabar";
import { ProSidebarProvider } from 'react-pro-sidebar';
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import { ThroughProvider } from 'react-through'

ReactDom.render(
    <>
        <BrowserRouter><ProSidebarProvider>
            <App /></ProSidebarProvider></BrowserRouter>
    </>

    , document.getElementById("root"));
