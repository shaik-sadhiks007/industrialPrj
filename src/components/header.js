import { FaBars, FaPowerOff } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header({ handleOpenSidebar,toggleLogin }) {

    const navigate = useNavigate();
    const handleLogout = () =>{
        toggleLogin(false)
        navigate('/')
    }

    const user = JSON.parse(localStorage.getItem('userinfo')) ;
    console.log(user)

    return (

        <div className="container border mt-4 py-2 rounded">
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <FaBars className="fs-4 mb-0 mt-0" onClick={() => handleOpenSidebar()} style={{cursor:'pointer'}}/>
                    <span className="mb-0 ms-3 fs-5">Welcome <span className="text-capitalize">{user.email}</span></span>
                </div>
                <div className="">
                    <button className="btn btn-primary">
                        <FaPowerOff />
                        <span className="mb-0 ms-2" onClick={() =>handleLogout()}>LOGOUT</span> 
                    </button>
                </div>

            </div>
        </div>

    )
}
export default Header;