import React from "react";
import { Grid, Card, Image } from "semantic-ui-react";
import { GameProps } from "../../interfaces/GameProps.interface";
import { newGame, highLimitGame } from "../common/GameIcons";

const Game = ({ name, imgPath, attributes }: GameProps) => {
  return (
    <Card className={`${name}-column`}>
      {attributes.length !== 0
        ? attributes.map((attribute) => (
            <Image
              className={attribute}
              src={attribute === "new" ? newGame : highLimitGame}
            />
          ))
        : ""}
      <Image className={name} src={imgPath} fluid />
    </Card>
  );
};

export default Game;
