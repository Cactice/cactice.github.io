import { Component } from "react";
import Cards from "./SpringCards.js";

import { Row, Col, Container } from "react-bootstrap";

var data = [
  {
    title: "Lensign",
    content:
      "iOS app that allows users to code with a touch interface as well as function as a full-fledged video editor",
    imageUrl: "lensign.jpg",
  },
  {
    title: "Lunchmate",
    content: "An app for finding people to eat lunch with",
    imageUrl: "lunchmate.jpg",
  },
  {
    title: "MD Split",
    content:
      "Split md files to small chunks so it is appropriate to post on websites like scrapbox",
    imageUrl: "md-split.jpg",
  },
  {
    title: "Three60",
    content: "Use three IOS devices to record a 360 video",
    imageUrl: "three60.jpg",
  },
  {
    title: "Trakr",
    content: "An app that finds lost people using machine learning",
    imageUrl: "trakr.jpg",
  },
  {
    title: "Coke Sales Predictor",
    content:
      "Predict the sales of coca-cola's drink's sales based on machine learning",
    imageUrl: "cokeSalesPredictor.jpg",
  },
];

export default class Projects extends Component {
  render() {
    return (
      <div>
        <center>
          <Container>
            <Row>
              {data.map((d, key) => {
                return (
                  <Col style={{ marginTop: 30, marginBottom: 30 }}>
                    <Cards
                      title={d.title}
                      content={d.content}
                      key={key}
                      imageUrl={d.imageUrl}
                    />
                  </Col>
                );
              })}
            </Row>
          </Container>
        </center>
      </div>
    );
  }
}
