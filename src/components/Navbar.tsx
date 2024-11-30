import { useNavigate } from "react-router-dom";

function Navbar() {
    // Routing for testing, will delete later
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate("/");
    }
    const handleFavouritesClick = () => {
        navigate("/store");
    }

    return <div className="fixed w-32 bg-blue-100 h-80 flex flex-col justify-evenly top-1/4">
        <button onClick={handleHomeClick}>🏠HomePage</button>
        <button onClick={handleFavouritesClick}>❤️Favourites</button>
        <button>🕒History</button>
        <button>👤Profile</button>
    </div>
};

export default Navbar;