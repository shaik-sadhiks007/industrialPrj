import React, { useState } from 'react';
import { IoHome } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { IoMdGrid } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import { AiOutlineAudit } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { ImPower } from "react-icons/im";
import { Link } from 'react-router-dom';
import '../style/sidebar.css';
import Header from './header';

function Sidebar ({toggleLogin}) {
    
    const [showSidebar, setShowSidebar] = useState(false);

    const handleOpenSidebar = () => {
        setShowSidebar(true);
    };

    const handleCloseSidebar = () => {
        setShowSidebar(false);
    };

    return (
        <>
            <Header handleOpenSidebar={handleOpenSidebar} toggleLogin={toggleLogin}/>

            <div
                className={`offcanvas offcanvas-start ${showSidebar ? 'show' : ''}`}
                tabIndex="-1"
                id="sidebar"
                aria-labelledby="sidebarLabel"
            >
                <div className="offcanvas-header">
                    <h3 className="offcanvas-title" id="sidebarLabel">Elder & Community Caresuite</h3>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        onClick={handleCloseSidebar}
                        aria-label="Close"
                    ></button>
                </div>
                <div className={`offcanvas-body ${showSidebar ? 'fade-in' : 'fade-out'}`}>

                    <div className="d-flex align-items-center fs-5 pb-3">
                        <IoHome />
                        <Link to={'/dashboard'} className='ms-4 text-decoration-none text-dark '>Dashboard</Link>
                    </div>
                    <div className="d-flex align-items-center fs-5 py-3">
                        <MdComputer />
                        <Link to={'/addServiceComponent'} className='ms-4 text-decoration-none text-dark'>Add Service Component</Link>
                    </div>
                    <div className="d-flex align-items-center fs-5 py-3">
                        <IoMdGrid />

                        <Link to={'/viewServiceComponents'} className='ms-4 text-decoration-none text-dark'>View Service Components</Link>
                    </div>
                    <div className="d-flex align-items-center fs-5 py-3">
                        <FaBuildingColumns />

                        <Link to={'/manageUser'} className='ms-4 text-decoration-none text-dark'>Manage User</Link>
                    </div>
                    <div className="d-flex align-items-center fs-5 py-3">
                        <AiOutlineAudit />
                        <Link to={'/auditLogReport'} className='ms-4 text-decoration-none text-dark'>Audit Log Report</Link>
                    </div>
                    <div className="d-flex align-items-center fs-5 py-3">
                        <IoIosSettings />

                        <Link to={'/globalParameters'} className='ms-4 text-decoration-none text-dark'>Global Parameters</Link>
                    </div>
                    <div className="d-flex align-items-center fs-5 py-3">
                        <GrAnnounce />
                        <Link to={'/announcements'} className='ms-4 text-decoration-none text-dark'>Announcements</Link>
                    </div>
                    <div className="d-flex align-items-center fs-5 py-3">
                        <ImPower />
                        <Link to={'/exceptionsHandling'} className='ms-4 text-decoration-none text-dark'>Exceptions Handling</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;