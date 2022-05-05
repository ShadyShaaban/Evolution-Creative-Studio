import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from  'react-bootstrap/ListGroupItem'


const BrandingCard =()=>{
  return(

<Card style={{ width: '60vw' }}>
  
 
    <Card.Header>Concept & Strategy</Card.Header>
    <Card.Body>
    <Card.Text>
    Creative evolution studio believes in being focused,  consistent and enthused all the time to each client. Because we understand branding is just not a word,  its big-league!  With us you receive what’s unprecedented and we make it impressive every time.  
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Branding identity</ListGroupItem>
    <ListGroupItem>Logo design</ListGroupItem>
    <ListGroupItem>Emblem design</ListGroupItem>
    <ListGroupItem>Brand graphic elements</ListGroupItem>
    <ListGroupItem>Stationery</ListGroupItem>
    <ListGroupItem>Social media templates</ListGroupItem>
    <ListGroupItem>Instagram product photography</ListGroupItem>
  </ListGroup>

</Card>
  )}

export default BrandingCard;