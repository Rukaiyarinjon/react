import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import banner from '../../assets/image.jpg';
import banner1 from '../../assets/image2.jpg';
import banner2 from '../../assets/image3.jpeg';
import './Home.css';

const Home = () => {
    return (
        <div>
            
    <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner my-image-container">
    <div className="carousel-item active">
      <img  src={banner} className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={banner1} className="d-block w-100 img-fluid" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100 img-fluid" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

            
        </div>
    );
};

export default Home;