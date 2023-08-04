import './HomePage.css';
import heroPlaceholder from '../../assets/images/heroPlaceholder.jpg'
import jason from '../../assets/images/jason.jpeg'
import joel from '../../assets/images/joel.png'
import kristin from '../../assets/images/kristin.jpeg'
import { Link } from 'react-router-dom';




export default function HomePage() {
  return (
    <>
        <div className="hero-image">
          <img src={heroPlaceholder} alt="Hero" width="100%" height="100%" />
          <div className="container">
            <div className="carousel-caption">
              <h1 className="home-h1">COMING SOON</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis harum tempore! Ad eveniet aspernatur eum voluptates a commodi earum qui harum sapiente dicta quidem, vero excepturi aperiam, est consequuntur?</p>
              <Link className="btn btn-lg btn-light" to="/dogs">View Dog Breeds</Link>
            </div>
          </div>
        </div> <br />



        <section className="features">
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">First something.<span className="text-body-secondary"> First cool feature.</span></h2>
              <p className="lead">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod esse iusto doloribus impedit odio incidunt cum doloremque maiores qui, illum mollitia architecto blanditiis quibusdam quia voluptatem consequatur est minima pariatur. </p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"><rect width="100%" height="100%" fill="black" /></svg>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">Second something.<span className="text-body-secondary"> Second cool feature.</span></h2>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione modi sit fugiat velit voluptatibus beatae quis numquam? Sunt non animi reiciendis deleniti aliquid libero dolor sapiente suscipit, nisi nostrum recusandae?</p>
            </div>
            <div className="col-md-5 order-md-1">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"><rect width="100%" height="100%" fill="black" /></svg>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">Last Something.<span className="text-body-secondary"> Last cool feature.</span></h2>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus reprehenderit, a magnam soluta asperiores dolor architecto quos. Voluptates quibusdam sint, perspiciatis, quas eius aperiam illo labore autem ex magni ea!</p>
            </div>
            <div className="col-md-5">
              <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"><rect width="100%" height="100%" fill="black" /></svg>
            </div>
          </div>
        </section>


        <hr className="featurette-divider"></hr>

        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img src={jason} alt="jason" className="rounded-circle" width="140" height="140" />
              <h2 className="fw-normal">Heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure veniam deleniti iste incidunt ratione. Optio at et fugit, molestias iure doloremque asperiores voluptates veniam incidunt, voluptatibus soluta consectetur quas!</p>
              <p><a className="btn btn-dark" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <img src={kristin} alt="kristin" className="rounded-circle" width="140" height="140" />
              <h2 className="fw-normal">Heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, architecto labore minima officia modi nesciunt suscipit adipisci eligendi laudantium rerum molestiae quis minus aut ipsa vitae dicta delectus? Sequi, laudantium.</p>
              <p><a className="btn btn-dark" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <img src={joel} alt="joel" className="rounded-circle" width="140" height="140" />
              <h2 className="fw-normal">Heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a quas laborum. Sapiente possimus repellat iste quas? Facilis dicta voluptatum quisquam, accusamus nostrum cupiditate! Perspiciatis eius illo tenetur facilis nulla.</p>
              <p><a className="btn btn-dark" href="#">View details &raquo;</a></p>
            </div>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <footer className="container">
          <p className="float-end"><a href="#" className="btn btn-dark">Back to top</a></p>
          <p>&copy; 2023 Pet App</p>
        </footer>
    </>

  )



}