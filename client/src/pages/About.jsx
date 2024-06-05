import { NavLink } from "react-router-dom";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Why Choose Us? </h1>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repudiandae voluptates sapiente officia nobis neque! Error quidem praesentium laudantium ea distinctio sequi? Deleniti aliquid quae, iste neque alias odit blanditiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sunt nemo exercitationem fuga tempora eius voluptatibus blanditiis ea harum voluptas, aperiam veniam cupiditate porro sint repellendus a in quidem reprehenderit.
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio consequuntur voluptatem ut aliquid, inventore dolorem suscipit. Quo quis enim quibusdam adipisci! Nesciunt quasi, ex tempora autem dolore culpa eligendi labore.
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat iste dignissimos, vero magni minima, deleniti laboriosam delectus quae, natus blanditiis quos reprehenderit harum? Enim illo tenetur voluptates facere officia aliquam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem ea nemo modi officia, aliquid eos perspiciatis aut numquam quo, debitis, nulla hic ab aperiam. Delectus amet incidunt nisi at dolor!
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

    </>
  );
};
