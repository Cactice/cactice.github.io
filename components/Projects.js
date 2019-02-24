
import {Component} from 'react'
import Cards from './SpringCards.js'

import {Row, Col, Container} from 'react-bootstrap'

var data = [
  {
    title: 'Lensign', 
    content: 'IOS app that allows users to code with a touch interface as well as function as a full-fledged video editor',
    imageUrl: 'lensign.png'
  },
  {
    title: 'Lunchmate', 
    content: 'An app for finding people to eat lunch with',
    imageUrl: 'lunchmate.png'
  },
  {
    title: 'Md-split', 
    content: 'Split md files to small chunks so it is appropriate to post on websites like scrapbox',
    imageUrl: 'md-split.png'
  },
  {
    title: 'Three60', 
    content: 'Use three IOS devices to record a 360 video',
    imageUrl: 'three60.png'
  },
  {
    title: 'Trakr', 
    content: 'An app that finds lost people using machine learning',
    imageUrl: 'trakr.png'
  },
  {
    title: 'CokeSalesPredictor', 
    content: 'Predict the sales of coca-cola\'s drink\'s sales based on machine learning',
    imageUrl: 'cokeSalesPredictor.gif'
  },
]

export default class Projects extends Component {
  render() {
    return (
      <div>

        <center>
        <Container>
          <Row>
            {
              data.map((d,key) => {
                return (
                  <Col style={{marginTop:30,marginBottom:30}}>
                    <Cards
                     title = {d.title}
                     content = {d.content}
                     key = {key} 
                     imageUrl = {d.imageUrl} 
                    />
                  </Col>
                )
              })
            }
          </Row>
        </Container>
        </center>

      </div>
    )
  }
}
