import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="navbar navbar-expand-lg bg-light navbar-light">
            <div className="container">
                <a href="#data" className="navbar-brand">CWS</a>
            
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/course/add" className="nav-link">Add Course</Link>
                </li>
            </ul>
            
            </div>
        </div>
    );
}


export default HomePage;