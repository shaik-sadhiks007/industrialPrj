import MyApplication from './components/myApplication';
import AddServiceComponent from './components/addServiceComponent';
import ViewServiceComponents from './components/viewServiceComponents';
import AddFacility from './components/addFacility';
import ManageUser from './components/manageUser';
import AuditLogReport from './components/auditLogReport';
import Announcements from './components/announcements';
import GlobalParameters from './components/globalParameters';
import ExceptionHandling from './components/exceptionsHandling';
import Sidebar from './components/sidebar';
import Login from './components/login/login';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isLogin,setIsLogin] = useState(false);

  const toggleLogin = (type) =>{
    setIsLogin(type);
  }

  return (

    <>
      {isLogin && <Sidebar toggleLogin={toggleLogin}/>}

      <Routes >
        <Route path="/" element={<Login toggleLogin={toggleLogin}/>} ></Route>
        <Route path="/dashboard" element={<MyApplication />} ></Route>
        <Route path="/addServiceComponent" element={<AddServiceComponent />} ></Route>
        <Route path="/viewServiceComponents" element={<ViewServiceComponents />} ></Route>
        <Route path="/addFacility" element={<AddFacility />} ></Route>
        <Route path="/manageUser" element={<ManageUser />} ></Route>
        <Route path="/auditLogReport" element={<AuditLogReport />} ></Route>
        <Route path="/globalParameters" element={<GlobalParameters />} ></Route>
        <Route path="/announcements" element={<Announcements />} ></Route>
        <Route path="/exceptionsHandling" element={<ExceptionHandling />} ></Route>

      </Routes>

    </>



  );
}

export default App;
