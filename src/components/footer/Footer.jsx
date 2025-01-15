

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2025 My Company. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Terms of Service</a></li>
              <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
