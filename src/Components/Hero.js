import img from "./images/1.PNG";
import Typed from "react-typed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

export default function Hero() {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center">
      <Container data-aos="zoom-in" data-aos-delay="500">
        <Row>
          <Col lg={6} className="item-center">
            <h1 style={{ whiteSpace: "nowrap" }}>Uppula Suryateja Reddy</h1>
            <br />
            <p>
              &nbsp;
              <span
                class="typed"
                data-typed-items="Developer, Tabla Player, Gamer"
              >
                <Typed
                  strings={["Code.", "Solve.", "Evolve."]}
                  loop
                  typeSpeed={130}
                  backSpeed={60}
                  smartBackspace
                  shuffle={false}
                  backDelay={500}
                  fadeOut={true}
                  fadeOutDelay={200}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />
              </span>
            </p>
            <div class="social-links">
              
              
              <a href="https://github.com/SuryatejaReddy15">
                <i class="bx bxl-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/suryateja-reddy-uppula-b3878625a/">
                <i class="bx bxl-linkedin"></i>
              </a>
              <a href="mailto:suryatejauppula68@gmail.com">
                <i class="bx bx-envelope"></i>
              </a>
            </div>
            <br />
            <Button
              variant="outlined"
              target="_blank"
              href="https://drive.google.com/file/d/1sT1Y9wbuMDEupRlYwIXmlAs1rUnJ7v8o/view?usp=sharing"
              style={{

                padding: "8px 24px",
                color: "rgb(116, 128, 138)",
                borderColor: "rgb(116, 128, 138)",
              }}
            >
               Resume
            </Button>
          </Col>
          <Col
            lg={6}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "15px",
            }}
          >
            <img
              src={img}
              height="100%"
              width="65%"
              style={{
                borderRadius: "30px",
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
