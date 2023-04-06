import React from "react";
import HomePage from './pages/homePage';
import Config  from './pages/config';
import UserEfectPage from './pages/userEfectPage'
import {DefaultContextProvider} from './contexts/defaultContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const RouterConfig = () =>{
    return (
        <BrowserRouter>
            <DefaultContextProvider>
                <Routes>                
                        <Route path="/" element={ <HomePage/> }></Route>
                        <Route path="/configuracoes" element={ <Config /> }></Route>
                        <Route path="/efect" element={ <UserEfectPage /> }></Route>                
                </Routes>            
            </DefaultContextProvider>
        </BrowserRouter>
    )
}

export default RouterConfig;