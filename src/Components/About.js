import React from "react";
import about from "./Image/about.jpg";
import './Style/About.css';

export function About(){
    return (
        <>
          <div className="container py-4">
          <div className="row">
            <div className="col-12">
              <div class="page-title">
                <h1 className="text-white px-2">
                  <strong>About Us</strong>
                </h1>
              </div>
            <div>
              <div className="hero-section">
              <img
                class="aboutimage"
                className="d-block w-100"
                src={about}
                style={{height:"600px"}}
              />
              </div>
            </div>
            <br/>
            <div className="my-4">
              <div class="abouttitle">
                <h3 className="subtitle">
                  <strong>OUR STORY</strong>
                </h3>
              </div>
              <p className="subtext">
                NGO CONNECT HUB was initiated in 2000 when a group of friends
                came together with the intention of giving back to the society.
                They were inspired by the thought and philosophy of Peter Senge,
                the founder of the Society for Organizational Learning who has
                propagated that “sustainability, social equality and the
                environment are now business problems…” and corporate leaders
                can’t expect governments to solve them alone.
                What triggered these thoughts was the liberalisation of the
                Indian economy in the 1990’s which brought with it immense
                opportunities. Business revived, and India became not just a
                market, but also an investment prospect for the developed world.
                Disposable incomes and early settlements became a living reality
                for the working middle-class. For the first time in India,
                professionals could think beyond making a living, and contribute
                towards the society
              </p>
            </div>
            <br/>
            <div className="my-4">
              <div class="abouttitle">
                <h3 className="subtitle">
                  <strong>VISON</strong>
                </h3>
              </div>
              <p className="subtext">
                (1) NWork as a catalyst in bringing sustainable change in the lives
                of lesser privileged children and families with a life-cycle
                approach of development.<br/>
                (2) Enable the civil society across the world to engage proactively
                in the change process through the philosophy of civic driven
                change.<br/>
                (3) Adopt highest standards of governance to emerge as a leading
                knowledge and technology driven, innovative and scalable
                development institution.
              </p>
            </div>
            <br/>
            <div className="my-4">
              <div class="abouttitle">
                <h3 className="subtitle">
                  <strong>MISSION</strong>
                </h3>
              </div>
              <p className="subtext">
                NGO CONNECT HUB is to empower underprivileged children, youth
                and women through relevant education, innovative healthcare and
                market-focused livelihood programmes.NGO CONNECT HUB is to
                deploy best possible methodology and technology for achieving
                ideal SROI (social return on investment), to practice and
                promote good governance. To link business competitiveness of the
                corporate with social development initiatives; also to sensitize
                privileged children, youth and citizens in general to promote
                Civic Driven Change.
              </p>
            </div>
            <br/>
            <div className="my-4">
              <div class="abouttitle">
                <h3 className="subtitle">
                  <strong>PHILOSPOHY OF CHANGE</strong>
                </h3>
              </div>
              <p className="subtext">
                While our focus as a development organisation has been first and
                foremost to work on the ground for bringing positive change in
                the lives of the less privileged children and families, we have
                been making equal efforts to sustain this change, by sensitising
                and engaging the privileged masses towards their social
                responsibility. Not remaining restricted to the community, and
                with the aim of achieving sustainable development in a wider
                social context, NGO CONNECT HUB has adopted the principle of
                Civic Driven Change, making the civil society an active partner
                in all its welfare initiatives
              </p>
            </div>
          </div>
        </div>
      </div>

        </>
      );
}