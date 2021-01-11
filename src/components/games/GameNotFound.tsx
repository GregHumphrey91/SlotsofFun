import React from "react";
import { Icon, Segment } from "semantic-ui-react";

const GameNotFound = () => {
  return (
    <Segment className='game-not-found' padded>
      <Icon name='frown' size='huge' />
      <h1>Game not found</h1>
      <p>We're sorry, the game you're searching for doesn't exist.</p>
    </Segment>
  );
};

export default GameNotFound;
