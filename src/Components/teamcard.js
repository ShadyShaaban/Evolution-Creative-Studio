import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import bar from "../Resources/bar.jpg"
import "./card.css"
import "./image.css"
import classes from "./teamcard.module.css"


const TeamCard = () => (
  <Card className={classes.Card}>
    <Image src={bar}  wrapped ui={false} />
    <Card.Content>
      <Card.Header>Jack</Card.Header>
      <Card.Meta>
        <span className='date'>Position: CEO </span>
      </Card.Meta>
      <Card.Description>
  .........
      </Card.Description>
    </Card.Content>
 
  </Card>
)

export default TeamCard