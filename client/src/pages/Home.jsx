import React from 'react'

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>backend website </p>
              <h1>Welcome to somay coder</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos delectus unde sit modi neque cupiditate iste ad in doloremque ea perspiciatis illo quibusdam magni ipsa, excepturi, culpa odio provident quaerat!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ducimus iusto corrupti dignissimos corporis! Autem iste ab fugiat accusamus. Suscipit magni eveniet ad neque eligendi quae doloribus explicabo magnam non.
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images  */}
            <div className="hero-image">
              <img
                src="/images/home.png"
                alt="coding together"
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      
      {/* <Analytics />     */}

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p>i am here to help you</p>
            <h1>Get Started</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse deleniti ex voluptas! Itaque recusandae dicta nobis sunt magnam cupiditate voluptates asperiores nam velit sapiente? Labore aut sed pariatur deserunt suscipit!
              Molestiae sint aut vitae corporis ipsum blanditiis mollitia culpa eius ea omnis doloribus, ipsam, hic veritatis minus beatae! Repellendus temporibus ab aut non possimus ad sequi quas est tempore aspernatur.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}


