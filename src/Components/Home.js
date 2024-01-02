import { Carousel, Col, Row } from "react-bootstrap";
import './Style/Home.css';
import H1 from "./Image/H1.jpg";
import H2 from "./Image/H2.jpg";
import H3 from "./Image/H3.jpg";
import H4 from "./Image/H4.jpg";
import H5 from "./Image/H5.jpg";
import H6 from "./Image/H6.jpg";
import H8 from "./Image/H8.jpg";
import H9 from "./Image/H9.jpg";
import H10 from "./Image/H10.jpg";
import H11 from "./Image/H11.jpg";
import H12 from "./Image/H12.jpg";


export function Home(){
    return(
      <>
        <div>
        <Carousel data-bs-theme="dark" className="Carousel" interval={3000} pause={false}>
        <Carousel.Item >
          <img
            class="Img"
            className="d-block w-100"
            src={H2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 class="Ctitle">In necessary things, Unity; in doubtful things, Liberty; in all things, Charity</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src={H3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3 class="Ctitle"> Children are great imitators. So give them something great to imitate</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src={H4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 class="Ctitle">Volunteerism is the voice of the people put into action.  These actions shape and mold the present into a future of which we can all be proud.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src={H5}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3 class="Ctitle">We make a Life by what we Give</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="Img"
            className="d-block w-100"
            src={H1}
            alt="Fifth slide"
          />
          <Carousel.Caption>
            <h3 class="Ctitle">Preservation of our environment is not a liberal or conservative challenge, it’s common sense.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      
      <br />
      <div class="Content1">
      <br />
      <h4 class="text1">"Welcome to NGOHubConnect - Connecting Hearts, Empowering Change"</h4>
      <p class="text1-info">
        Established in 2000, we believe in the power of collective action to make a positive impact on the world. Our platform serves as a bridge, connecting compassionate individuals like you with reputable Non-Governmental Organizations (NGOs) dedicated to creating meaningful change.
      </p>
      <Row>
        <Col>
          <p class="text1">
            <strong class="text1-subtitle">🤝 Connect:</strong><br /> Easily discover and connect with a diverse range of NGOs working on causes that matter to you. Whether it's education, healthcare, environmental conservation, or social justice, find the organizations making a difference.
          </p>
        </Col>
        <Col>
          <p class="text1">
            <strong class="text1-subtitle">🌍 Impact: </strong><br /> Your actions matter. By supporting NGOs through [Your Platform Name], you contribute directly to impactful projects and initiatives, creating a ripple effect of positive change in communities worldwide.
          </p>
        </Col>
        <Col>
        <p class="text1">
        <strong class="text1-subtitle">🤲 Empower:</strong><br /> We empower you to be a force for good. Explore volunteer opportunities, donate to causes you're passionate about, or simply amplify the voices of NGOs through social sharing. Every action counts.
        </p>
        </Col>
      </Row>
      </div>
      <br />
      <div class="Content2">
        <br />
        <h2 class="titletop">Take Action</h2><br />
        <Row>
        <Col xs={4}>
          <img src={H6} alt="" />
        </Col>
        <Col>
          <p class="title">Discover NGOs</p>
          <p class="text2" >
            Explore our curated list of NGOs, each with a unique mission and a track record of making a difference. Learn about their projects and the communities they serve.
          </p><br />

          <p class="title">Connect</p>
          <p class="text2" >
            Sign up to create a personalized profile. Connect with NGOs, stay updated on their work, and engage in meaningful conversations. Your engagement builds a supportive community.
          </p><br />

          <p class="title">Make a Difference</p>
          <p class="text2" >
            Choose how you want to make an impact. Volunteer your time, donate funds directly to projects, or share inspiring stories to raise awareness. Your support is a catalyst for change.
          </p><br />
        
        </Col>
        </Row>
        <Row>
          <h4 class="text3-1">TO BECOME A PART OF CHANGE</h4>
          <h6 class="text3-1">Check our <a href="/events" class="a">Events</a> and become a part of it</h6>
        </Row>
        <br />
      </div>

      <div class="Content3">
        <br /><br />
        <div>
          <h2 class="Content3-title">SUPPORT A CAUSE</h2>
          </div>
        <br />
        <div class="card-container">
          <div className="card">
            <img src={H8}  className="card-image" alt=""/>
              <div className="overlay">
                <h4 className="card-title">Health Cannot Wait</h4>
              </div>
              <div className="card-content">
                <p>Realising the need for accessible and quality healthcare for all. Our campaign 'Health Cannot Wait' aims at providing people from the under-privileged sections.</p>
                <a href="#" class="a">Know More</a>
              </div>
          </div>

          <div className="card">
            <img src={H9}  className="card-image" alt=""/>
              <div className="overlay">
                <h4 className="card-title">She can FLY</h4>
              </div>
              <div className="card-content">
                <p>The initiative 'She Can Fly' is an effort to enable, equip and empower girl children with quality education, proper nutrition and good health.</p><br />
                <a href="#" class="a">Know More</a>
              </div>
          </div>

          <div className="card">
            <img src={H10}  className="card-image" alt=""/>
              <div className="overlay">
                <h4 className="card-title">Shiksha Na Ruke</h4>
              </div>
              <div className="card-content">
                <p>'Shiksha Na Ruke' initiative has been helping children from difficult circumstances get back to school and restart their lives.</p><br />
                <a href="#" class="a">Know More</a>
              </div>
          </div>

          <div className="card">
            <img src={H11}  className="card-image" alt=""/>
              <div className="overlay">
                <h4 className="card-title">Tayari kal ki</h4>
              </div>
              <div className="card-content">
                <p>Our campaign 'Tayari Kal Ki' aims at Training and Up Skilling the youth between the age of 18-32 years for employment and empowering them with a secure livelihood.</p>
                <a href="#" class="a">Know More</a>
              </div>
          </div>
      </div>

      </div>
      <br /><br />

      <div class="Content1-5">
        <br />
        <img src={H12} alt="" class="img1-5" />
        <br />
      </div>
      <br /><br />
      </>

    )
}


