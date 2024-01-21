import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Planets from "./Planets"
import StarsShips from "./StarsShips"
import ApiClient from "../ApiClient";

const NavPanel = () => {
    const URL = 'https://swapi.dev/api';
    
    const linkStyle = {
        display: 'grid',
        color: 'white',
        width: '100%',
        height: '100%',
        justifyItems: 'center',
        alignItems: 'center',
    }

    const fetchData = async (endpoint, id) => {
        try {
            const api = new ApiClient(URL);
            const responseData = await api.fetchById(endpoint, id);
            return responseData;
        } catch (error) {
            throw error;
        }
    };

    return (
        <>
            <Router>
                <ul className="nav-panel">
                    <li className="nav-button"><Link style={linkStyle} to={"/people"}>Characters</Link></li>
                    <li className="nav-button"><Link style={linkStyle} to={"/planets"}>Planets</Link></li>
                    <li className="nav-button"><Link style={linkStyle} to={"/star-ships"}>Star ships</Link></li>
                </ul>
                <div className='container'>
                    <Routes>
                        <Route path="/" element={<Home fetchData={fetchData} />}></Route>
                        <Route path="/people" element={<Home fetchData={fetchData} />}></Route>
                        <Route path="/planets" element={<Planets fetchData={fetchData} />}></Route>
                        <Route path="/star-ships" element={<StarsShips fetchData={fetchData} />}></Route>
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default NavPanel;