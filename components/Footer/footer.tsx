import React from "react";
import "./footerstyle.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";

const myStyle = () => {
  const myStyle = {
    backgroundImage:
      "url('https://media.geeksforgeeks.org/wp-content/uploads/rk.png')",
    height: "100vh",
    marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
};

const Footer = () => {
  return (
    <>
      <section className="footer-five">
        <div
          style={{
            backgroundImage: "url('https://www.gdsc-uit.org/_next/static/image/src/assets/images/decor-light.ad6149bd9ae88855a8048f5ca7f8284b.png')",
            height: "100vh",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
        >
          <a href="/home" className="logo">
            <img src="../assests/gdsc_logo.png" alt="Logo" style={{scale: 1.5}}/>
          </a>
          <p className="text-center">
            <b>Google Developer Student Club</b>
          </p>
          <p> Tezpur University</p>
          <br />
          Get Connected
          <br />
          <div className="input-icons">
            <input className="input icon-rtl" placeholder="Enter Email" />
          </div>
          <div className="social text-center mt-60">
            <ul>
              <li>
                <span>
                  <h2>Follow Us On</h2>
                </span>
              </li>
              <br />
              <li>
                <div>
                  <a href="https://instagram.com/gdsc_tezu?igshid=MzRlODBiNWFlZA==">
                    <InstagramIcon />
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a
                    href="https://www.linkedin.com/company/gdsc-tezpur-university/mycompany/"
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </li>
              <li>
                <div>
                  <a
                    href="https://github.com/afk-ankit/gdsc-tu"
                    target="_blank"
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright text-center">
                  <p className="text">
                    Copyright © 2023 GDSC TU. All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
