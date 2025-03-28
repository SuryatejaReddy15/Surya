import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <section id="about" class="about background-alt">
      <Container data-aos="fade-up">
        <div class="section-title">
          <h2>About</h2>
        </div>

        <Row className="justify-content-center text-center">
          
          <Col lg={8} pt={4} className="content">
            <br></br>
            <h3>Aspiring Software Developer</h3>
            <br></br>
            <p style={{ color: "#728394" }}>
              A Python Developer, Competitive Programmer, AI & ML
              enthusiast.
            </p>
            <br></br>
            <p style={{ color: "#728394" }}>
            I'm passionate about designing intelligent systems, understanding complex architectures,
             and constantly adapting to the fast-changing tech landscape. My long-term goal is to secure
              a role where I can grow as a well-rounded AI engineer.
            </p>
            <br></br>
            <Row>
              <Col lg={4}>
                <ul>
                <li>
                    <i class="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                    <span>Hyderabad, India</span>
                  </li>
                  <li>
                    <i class="bi bi-chevron-right"></i> <strong>Email:</strong>{" "}
                    <span>
                      <a href="mailto:suryatejauppula68@gmail.com">
                        suryatejauppula68@gmail.com
                      </a>
                    </span>
                  </li>
                  <li>
                     <div style={{ whiteSpace: "nowrap" }}>
                      <i className="bi bi-chevron-right"></i> <strong>Degree:</strong>{" "}
                      <span>B.Tech - Computer Science and Engineering (2021-2025)</span>
                      </div>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
