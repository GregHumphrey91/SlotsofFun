import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";
import Navigation from "../layout/Navigation";
import Game from "../games/Game";
import GameNotFound from "../games/GameNotFound";
import { games } from "../../data/Games";
import { GameProps } from "../../interfaces/GameProps.interface";

const Home = () => {
  const [availableGames, setAvailableGames] = useState<GameProps[]>(games);
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    /**
     *  Filters games based on attributes.
     */
    const filterGames = () => {
      // Filter default games array based on attributes
      const filteredGames = games.filter((game) => {
        return game.attributes.indexOf(filter) >= 0;
      });

      // Displays all games by default
      if (filter === "all") {
        setAvailableGames(games);
      } else {
        setAvailableGames(filteredGames);
      }
    };

    if (filter !== "") {
      filterGames();
    }

    return () => {};
  }, [filter]);

  useEffect(() => {
    /**
     *  Filters games based on user's search value.
     */
    const searchGames = () => {
      // Remove all whitespace with RegEx
      const userSearchValue = search.replace(/\s/g, "").toUpperCase();

      const searchResults = games.filter((game) =>
        // Remove whitespace and compare both strings case insensitively.
        game.name.toUpperCase().replace(/\s/g, "").includes(userSearchValue)
      );

      // If search is empty then show all available games.
      if (search === "") {
        setAvailableGames(games);
        setFilter("all");
      } else {
        setAvailableGames(searchResults);
      }
    };

    searchGames();

    return () => {};
  }, [search]);

  return (
    <div className='home'>
      <Navigation
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
      />

      {availableGames.length !== 0 ? (
        <Card.Group className='games-container' centered={true}>
          {availableGames.map((game, index) => (
            <Game
              key={index}
              name={game.name}
              imgPath={game.imgPath}
              attributes={game.attributes}
            />
          ))}
        </Card.Group>
      ) : (
        <GameNotFound />
      )}
    </div>
  );
};

export default Home;
