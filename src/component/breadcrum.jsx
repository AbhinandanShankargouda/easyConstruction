import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// define custom breadcrumbs for certain routes.
// breadcrumbs can be components or strings.
const routes = [

    {
        path: "/", breadcrumb: "Home",
    },
    { path: "/projects", breadcrumb: "Projects", },
    {
        path: "/projects/drawings",
        breadcrumb: 'Drawings',
    },
    {
        path: "/projects/labours",
        breadcrumb: 'Workers',
    },
    {
        path: "/projects/attendence",
        breadcrumb: 'Attendence',
    },
    {
        path: "/projects/materials",
        breadcrumb: 'Materials',
    }
];


function Arrows() {
    return (
        <li className="withoutarrow">I</li>
    )

}


// map & render your breadcrumb components however you want.
const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);
    function Zinc() {
        return <>

            <Breadcrumb>
                <div className="breadcontainer">
                    <div className='breaditem'>
                        <ul className="tops" style={{ paddingLeft: '0px' }} >
                            <span class="icon is-small">
                                <FontAwesomeIcon style={{ color: '#DFDDC7' }} icon={faHouse} />
                            </span>
                            {breadcrumbs.map(({ match, breadcrumb }) => (

                                <li className="breads"><NavLink id="bgc" key={match.pathname} to={match.pathname} >
                                    {breadcrumb}
                                </NavLink></li>
                            ))
                            }
                        </ul></div>

                </div></Breadcrumb>


        </>
    }


    return (
        <> {
            breadcrumbs.length === 3 ? <Zinc /> : <></>
        }</>







    );
};
export default Breadcrumbs
export { routes }