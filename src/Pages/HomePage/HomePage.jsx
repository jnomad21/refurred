import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <svg className="bd-placeholder-img" width="100%" height="100%"><rect width="100%" height="100%" fill="black" /></svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Home Page</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto corporis harum tempore! Ad eveniet aspernatur eum voluptates a commodi earum qui harum sapiente dicta quidem, vero excepturi aperiam, est consequuntur?</p>
                  <p><a className="btn btn-lg btn-light" href="#">Button</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%"><rect width="100%" height="100%" fill="black" /></svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Maybe a carousel?</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellat perspiciatis voluptatem minima, culpa omnis! Veniam natus commodi rerum mollitia fugiat distinctio laborum non sit, laudantium, deleniti dicta exercitationem libero.</p>
                  <p><a className="btn btn-lg btn-light" href="#">Button</a></p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%"><rect width="100%" height="100%" fill="black" /></svg>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Or maybe just hero image</h1>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, quaerat consequuntur deserunt cumque iusto dolore veniam possimus impedit corporis temporibus distinctio minus beatae praesentium, rem modi libero delectus ipsam! Ut!
                  </p>
                  <p><a className="btn btn-lg btn-light" href="#">Button</a></p>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>




        <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140"><rect width="100%" height="100%" fill="black" /></svg>
              <h2 className="fw-normal">Heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure veniam deleniti iste incidunt ratione. Optio at et fugit, molestias iure doloremque asperiores voluptates veniam incidunt, voluptatibus soluta consectetur quas!</p>
              <p><a className="btn btn-dark" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140"><rect width="100%" height="100%" fill="black" /></svg>
              <h2 className="fw-normal">Heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, architecto labore minima officia modi nesciunt suscipit adipisci eligendi laudantium rerum molestiae quis minus aut ipsa vitae dicta delectus? Sequi, laudantium.</p>
              <p><a className="btn btn-dark" href="#">View details &raquo;</a></p>
            </div>
            <div className="col-lg-4">
              <svg className="bd-placeholder-img rounded-circle" width="140" height="140"><rect width="100%" height="100%" fill="black" /></svg>
              <h2 className="fw-normal">Heading</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum a quas laborum. Sapiente possimus repellat iste quas? Facilis dicta voluptatum quisquam, accusamus nostrum cupiditate! Perspiciatis eius illo tenetur facilis nulla.</p>
              <p><a className="btn btn-dark" href="#">View details &raquo;</a></p>
            </div>
          </div>



          <hr className="featurette-divider"></hr>

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
        </div>
        <hr className="featurette-divider"></hr>

        <footer className="container">
          <p className="float-end"><a href="#" className="btn btn-dark">Back to top</a></p>
          <p>&copy; 2023 Pet App</p>
        </footer>
      </main>
    </>

  )



}