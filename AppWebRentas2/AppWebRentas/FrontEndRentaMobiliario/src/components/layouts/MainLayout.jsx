import { Outlet } from "react-router-dom"
import { LateralMenu } from "../menus/LateralMenu"
import { MainBanner } from "../banners/MainBanner"
import { Info } from "../secctions/Info"

const MainLayout = ()=>{

    const toggleMenu =(e)=>{
        document.querySelector('.sidebar').classList.toggle('show')
    }

    return (
        <>
        <button className="menu-toggle" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
        </button>
        <div className="container-fluid">
            <div className="row">
                <LateralMenu/>
                <div className="col-10 main-content position-relative">
                    <MainBanner/>
                    <Info/>
                </div>
                <Outlet/>
            </div>
        </div>
        </>
    )
}

export default MainLayout