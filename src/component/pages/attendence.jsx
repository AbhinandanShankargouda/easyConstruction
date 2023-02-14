import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import Header from "../header"
import { Col, Row } from "react-bootstrap"
import Breadcrumbs from '../breadcrum';
//nested data is ok, see accessorKeys in ColumnDef below
const data = [
    {
        id: 1,
        name: {
            firstName: 'John',
            lastName: 'Doe',
        },
        contact: '261 Erdman Ford',
        startingtime: 'East Daphne',
        endtime: 'Kentucky',
    },
    {
        id: 1,
        name: {
            firstName: 'Jane',
            lastName: 'Doe',
        },
        contact: '261 Erdman Ford',
        startingtime: 'East Daphne',
        endtime: 'Kentucky',
    },
    {
        id: 1,
        name: {
            firstName: 'Joe',
            lastName: 'Doe',
        },
        contact: '261 Erdman Ford',
        startingtime: 'East Daphne',
        endtime: 'Kentucky',
    },
    {
        id: 1,
        name: {
            firstName: 'Kevin',
            lastName: 'Vandy',
        },
        contact: '261 Erdman Ford',
        startingtime: 'East Daphne',
        endtime: 'Kentucky',
    },
    {
        id: 1,
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        contact: '261 Erdman Ford',
        startingtime: 'East Daphne',
        endtime: 'Kentucky',
    },
    {
        id: 1,
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        contact: '261 Erdman Ford',
        startingtime: 'East Daphne',
        endtime: 'Kentucky',
    },
    {
        id: 1,
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        contact: '261 Erdman Ford',
        startingtime: 'East Daphne',
        endtime: 'Kentucky',
    },
    {
        id: 1,
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        contact: '261 Erdman Ford',
        startingtime: 'East Daphne',
        endtime: 'Kentucky',
    },
    {
        id: 1,
        name: {
            firstName: 'Joshua',
            lastName: 'Rolluffs',
        },
        contact: '261 Erdman Ford',
        startingtime: 'East Daphne',
        endtime: 'Kentucky',
    },
];

const Attendence = () => {
    //should be memoized or stable
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id', //access nested data with dot notation
                header: 'Id',
            },
            {
                accessorKey: 'name.firstName', //access nested data with dot notation
                header: 'First Name',
            },
            {
                accessorKey: 'name.lastName',
                header: 'Last Name',
            },
            {
                accessorKey: 'contact', //normal accessorKey
                header: 'Contact',
            },
            {
                accessorKey: 'startingtime',
                header: 'Starting Time',
            },
            {
                accessorKey: 'endtime',
                header: 'End Time',
            },
        ],
        [],
    );

    return (
        <>
            <div id="main">
                <Row><Header /></Row>
                <Breadcrumbs />
                <Row>
                    <Col className="col col-lg-2"></Col>
                    <Col className="col col-lg-11">
                        < MaterialReactTable id='main' columns={columns} data={data} /></Col>
                </Row></div>


        </>
    );

};

export default Attendence;