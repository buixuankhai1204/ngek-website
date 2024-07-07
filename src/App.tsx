import React from 'react';
import './App.css';
import {Route, Router, Routes} from "react-router-dom";
import AdminCategory from "./admin/category";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import DetailCategory from "./admin/category/pages/detail";
import Login from "./admin/auth/login";
import AuthorProvider from "./admin/auth/login/components/author.provider";
import PrivateRoute from "./admin/auth/login/components/privateRoute";

function App() {
    return (
        <>
            <div className="flex justify-items-start">
                <AuthorProvider>
                    <Sidebar/>
                    <div className="w-full">
                        <Header/>
                        <div className="flex bg-[#E5E5E5] text-black  h-[1200px]">
                            <div className="px-10 w-full">
                                <Routes>
                                    <Route path={"/admin/auth/login"} Component={Login}/>
                                    <Route element={<PrivateRoute/>}>
                                        <Route path={"/admin/category"} Component={AdminCategory}/>
                                        <Route path={"/admin/category/:categoryId"} Component={DetailCategory}/>
                                    </Route>

                                </Routes>
                            </div>

                        </div>
                    </div>
                </AuthorProvider>
            </div>


        </>
    );
}

export default App;
