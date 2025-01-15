
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image3 from '../../assets/image3.jpeg';
const Card = () => {
    return (
      <div className="container">
      <div className="row">
        {/* First Card */}
        <div className="col-md-6 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src={image3} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <p className="card-text text-danger">
              </p>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="col-md-6 mb-4">
          <div className="card" style={{ width: '18rem' }}>
            <img src={image3} className="card-img-top" alt="Card image" />
            <div className="card-body">
              <p className="card-text text-success">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    );
};

export default Card;