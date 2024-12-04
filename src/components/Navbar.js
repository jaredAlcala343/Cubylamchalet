import "./Navbar.css";
import Logos from "./images/Logos.png";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <img className="navbar-brand" src={Logos} alt="CUBYLAM CHALET"/>
                    
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Inicio
                            </a>
                        </li>  
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/baseapp/src/components/About">
                               Sobre nosotros
                            </a>
                        </li>   
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Productos y Servicios
                            </a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Ubicaciones
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Pedidos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;