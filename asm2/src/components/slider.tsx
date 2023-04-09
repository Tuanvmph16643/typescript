import slider1 from '../asset/slider1.png'
import slider2 from '../asset/slider2.png'
import slider3 from '../asset/slider3.png'

const Slider = () => {
    return <div id="carouselExample" className="container-fluid carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={slider3} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={slider2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={slider3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
}

export default Slider