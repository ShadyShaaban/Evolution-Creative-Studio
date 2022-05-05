import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from  'react-bootstrap/ListGroupItem'


const ConceptCard =()=>{
  return(

<Card style={{ width: '50vw' }}>
  
 
    <Card.Header>Concept & Strategy</Card.Header>
    <Card.Body>
    <Card.Text>
    We work on ideas that could catch a hold of a majority of public eyes and pitching it right to have highly rated TV shows or talk shows or movies. Our concepting technique is unique and we can get one’s hands on any versatile projects including concepting for business strategies and commercial campaigns. We create the pitch ,  We aspect the logline and ultimately, we launch it. 
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>	Concepting for TV shows, talk shows and movies</ListGroupItem>
    <ListGroupItem>Concepting for business strategy</ListGroupItem>
    <ListGroupItem>Concepting for commercial campaigns</ListGroupItem>
  </ListGroup>

</Card>
  )}

export default ConceptCard;