import React from "react"
import { Routes, Route } from "react-router-dom"

import {
    HomePage,
    AddItemPage,
    EditItemPage,
    AddBrandPage,
    EditBrandPage,
    Login,
    Register

} from "../pages"
const MainContent = (props) => {
    const { loginCbHandler } = props;
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="users" element={<ListProfile></ListProfile>}></Route>
                <Route path="users">
                    <Route path="/account" element={<Profile></Profile>}></Route>
                    <Route
                        path="/login"
                        element={<Login loginCbHandler={loginCbHandler}></Login>}
                    ></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                </Route>
            </Routes>
        </div>
    )
}

export default MainContent