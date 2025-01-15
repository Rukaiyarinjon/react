

const Header = () => {
    return (
        <div>
            <div className="btn-group">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                   Header Open
                </button>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                        <li><button className="dropdown-item" type="button">Item</button></li>
                        <li><button className="dropdown-item" type="button">Action</button></li>
                        <li><button className="dropdown-item" type="button">Components</button></li>
                    </ul>
            </div>

        </div>
    );
};

export default Header;