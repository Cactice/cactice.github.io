import {Component} from 'react'
import {Card, Button} from 'react-bootstrap'



export default class Projects extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: '15rem' }}>
          {/*<Card.Img variant="top" src="" />*/}
          <Card.Body>
            <Card.Title> {this.props.title}</Card.Title>
              <Card.Text style={{backgroundColor: 'orange'}}>
              {this.props.content}
            </Card.Text>

            <Button variant="primary">Visit</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
