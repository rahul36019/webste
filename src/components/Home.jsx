import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="Home" id="home">
        <main>
          <h1>Demon</h1>
          <p>The sol of every problem</p>
        </main>
      </div>
      <div className="Home2">
        <img
          src="https://img.freepik.com/premium-vector/system-update-tiny-programmers-upgrading-operating-system-it-specialists-updating-software-programs-applications-technical-error-service-computer-screen-with-updating-progress-bar_458444-952.jpg?size=626&ext=jpg"
          alt=""
          srcset=""
        />
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Quia alias at porro nisi, debitis voluptate?
          </p>
        </div>
      </div>
      <div className="Home3" id="about">
        <div>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsam aliquid consectetur beatae at. Nihil,
            cumque. Perferendis, quidem dignissimos? Quam numquam
            officiis consequatur aspernatur vitae nisi nostrum,
            et quia, ad porro a! Sapiente beatae aut quibusdam
            sint!
          </p>
        </div>
      </div>
      <div className="Home4" id="brand">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s"
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s"
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s"
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "0.10s"
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
