import React, { memo } from 'react'
import {renderRoutes} from 'react-router-config'
import {HashRouter } from 'react-router-dom'
import routes from './router'

 



import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import "./assets//css/reset.css"



export default memo(function App() {
    return (
    
        <HashRouter>
            <Header  />
            {renderRoutes(routes)}
            <Footer />
        </HashRouter>
    )
})
