import {useNavigate} from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <div className="header-container flex flex-row justify-between w-full border-b-2 border-custom-purple">

            <img src="/BoL Logo Edited.png" className="logo" alt="BoL Logo" onClick={() => window.open('https://ufosc.org/', '_blank')}/>
            <img src="https://docs.ufosc.org/img/logo.png" className="logo" alt="logo UFOSC Logo" onClick={() => window.open('https://ufosc.org/', '_blank')}/>
           
            <div class="flex justify-end flex-grow items-center">
            
            <div className="header-option-container" onClick={() => {navigate(`/`)}}>
                <div className="header-option-text">Home</div>
            </div>

            <div className="header-option-container" onClick={() => {navigate(`/download`)}}>
                <div className="header-option-text">Download</div>
            </div>

            <div className="header-option-container" onClick={() => {navigate(`/about`)}}>
                <div className="header-option-text">About</div>
            </div>

            </div>
        </div>
    )
}

export default Navbar
