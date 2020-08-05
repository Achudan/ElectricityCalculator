import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class Cards extends React.Component{
    render(){
        
        return(
            <Card style={{ width: '30rem', backgroundColor:'white'}}>
          <Card.Body>
            <Card.Title style={{ color:'black'}}>{this.props.title}</Card.Title>
            <Card.Text>{this.props.content}</Card.Text>
            <Link to={`/${this.props.respLink}`}>
                <Button variant="primary">Click Here!</Button>
            </Link>
           
          </Card.Body>
        </Card>
        )
    }
}

export default Cards