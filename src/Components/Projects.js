import Chip from "@material-ui/core/Chip";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
import CodeIcon from "@material-ui/icons/Code";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";

const Projects = () => {
  const items = [
    {
      cardTitle: "Cryptocurrency Financial Risk Management",
      cardDetailedText: [
        "Developed a machine learning-based web application to recommend the best crop based on soil and environmental inputs.",
        "Trained a classification model using Scikit-learn, Pandas, and NumPy on agricultural datasets.",
        "Integrated the model into a Django backend using views and forms to process user inputs and display predictions..",
        "Designed a responsive UI using HTML, CSS, and JavaScript to collect input data like NPK values, pH, temperature, and humidity.",
        "Used MySQL with Django ORM to store user inputs and prediction results.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Django", "Python", "MySQL"],
      links: [
        {
          url: "https://github.com/SuryatejaReddy15/Analysis-of-CryptoCurrency-Market-Financial-Risk-Management",
          text: "View Source Code",
        },
      ],
    },
    {
      cardTitle: "OD Passenger Flow Prediction in Metro Systems ",
      cardDetailedText: [
        "Developed a metro OD passenger flow prediction system using Attention-based Feature Fusion Network.",
        "Integrated EMGC-GRU and machine learning models (Random Forest, SVM, Logistic Regression) for comparative analysis.",
        "Achieved improved prediction accuracy by fusing spatial-temporal features through deep learning techniques."
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["Python", "Django", "Deep Learning"],
      links: [
        {
        url: "https://github.com/SuryatejaReddy15/Adaptive-Feature-Fusion-Networks-for-Origin-Destination-Passenger-Flow-Prediction-in-Metro-Systems",
          text: "View Source Code",
        }
      ],
    },
    {
      cardTitle: "Crop Recommendation System",
      cardDetailedText: [
        "Designed a system that recommends the most suitable crop based on inputs like soil nutrients, pH, temperature, humidity, and rainfall.",
        "Implemented a prediction workflow that processes user inputs, generates crop suggestions, and stores results for future analysis.",
      ].map(function (text) {
        return <li>{text}</li>;
      }),
      technologies: ["React", "Node.js", "Express.js","Python"],
      links: [
      ],
    },
  ];

  const [limit, setLimit] = useState(3);
  const [loadButton, setLoadButton] = useState(true);
  const [lessButton, setLessButton] = useState(false);

  const loadMore = () => {
    setLimit(6);
    setLoadButton(false);
    setLessButton(true);
  };

  const loadLess = () => {
    setLimit(3);
    setLoadButton(true);
    setLessButton(false);
  };

  const addButton = () => (
    <Fab color="primary" color="blue" aria-label="add">
      <AddIcon />
    </Fab>
  );

  return (
    <section id="projects" class="about background-alt">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>Projects</h2>
        </div>
        <div class="row">
          <div class="col-lg-12 d-flex justify-content-center">
            <VerticalTimeline className="custom-line">
              {items.slice(0, limit).map((data, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#343a40" }}
                  dateClassName="timeline-date"
                  contentArrowStyle={{
                    borderRight: "7px solid  rgb(33, 150, 243)",
                  }}
                  icon={<CodeIcon />}
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                >
                  <div className="projects-technologies">
                    {data.technologies.map((name, i) => (
                      <Chip key={i} label={name}></Chip>
                    ))}
                  </div>
                  <h3
                    className="vertical-timeline-element-title"
                    style={{
                      fontSize: "12",
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    {data.cardTitle}
                  </h3>
                  <p
                    style={{
                      fontSize: "1em",
                      fontWeight: "350",
                      color: "#74808a",
                    }}
                  >
                    {data.cardDetailedText}
                  </p>
                  <div className="project-links">
                    {data.links.map((link, j) => (
                      <div>
                        <br></br>
                        <Button
                          key={j} // eslint-disable-line react/no-array-index-key
                          variant="contained"
                          color="default"
                          target="_blank"
                          href={link.url}
                        >
                          {link.text}
                        </Button>
                      </div>
                    ))}
                  </div>
                </VerticalTimelineElement>
              ))}
              {loadButton && (
                <VerticalTimelineElement
                  iconOnClick={loadMore}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <AddIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
              {lessButton && (
                <VerticalTimelineElement
                  iconOnClick={loadLess}
                  iconClassName="d-flex justify-content-center"
                  icon={
                    <IconButton aria-label="add">
                      <RemoveIcon
                        style={{
                          color: "#fff",
                          marginTop: "0.1px",
                        }}
                      />
                    </IconButton>
                  }
                  iconStyle={{
                    background: "#0563bb",
                    color: "#fff",
                  }}
                />
              )}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
