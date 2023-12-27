import { Carousel } from "react-bootstrap";

export function Home(){
    return(
      <>
        <div>
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/mars.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 class="Ctitle">COME EXPLORE WITH US</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/anaut.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 class="Ctitle"> MAKING HUMANITY MULTIPLANETARY</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/moon.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 class="Ctitle">BEYOND IMAGINATION</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/moon.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 class="Ctitle">BEYOND IMAGINATION</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src="Image/moon.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 class="Ctitle">BEYOND IMAGINATION</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      
      </>

    )
}
