import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Add from "./pages/Add";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
    return (<Router>
            <Header/>
            <nav>
                {/*<Link to="/"> Home </Link>*/}
                {/*<Link to="/todo/new"> New </Link>*/}
                {/*<Link to="/auth"> Login </Link>*/}
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/todo/:id" element={<Single/>}/>
                <Route path="/todo/new" element={<Add/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            <div>Footer</div>
        </Router>);
};

export default App;