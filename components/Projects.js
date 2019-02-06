
import {Component} from 'react'
import Cards from './Cards'

import {Row, Col} from 'react-bootstrap'

var data = [
  {
    title: 'title', 
    content: 'content',
  },
  {
    title: 'title2', 
    content: 'content2',
  },
  {
    title: 'title2', 
    content: 'content2',
  },
  {
    title: 'title2', 
    content: 'content2',
  },
  {
    title: 'title2', 
    content: 'content2',
  },
  {
    title: 'title2', 
    content: 'content2',
  },
]

export default class Projects extends Component {
  render() {
    return (
      <div>
        <center>
          <Row>
            {
              data.map(d => {
                return (
                  <Col style={{margin:10}}>
                    <Cards
                     title = {d.title}
                     content = {d.content}
                    />
                  </Col>
                )
              })
            }
          </Row>
        </center>
      </div>
    )
  }
}
