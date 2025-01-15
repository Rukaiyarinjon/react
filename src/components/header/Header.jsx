

const Header = () => {
    return (
        <div>
            <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    Right-aligned but left aligned when large screen
                </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                        <li><button className="dropdown-item" type="button">Action</button></li>
                        <li><button className="dropdown-item" type="button">Another action</button></li>
                        <li><button className="dropdown-item" type="button">Something else here</button></li>
                    </ul>
            </div>

        </div>
    );
};

export default Header;