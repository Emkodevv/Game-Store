import React from "react";
import { useSelector } from "react-redux";
import GameCover from "../../components/Game-cover/game-cover";
import GameGenre from "../../components/Game-genre";
import GameBuy from "../../components/Game-buy";
import "./style.css";

const GamePage = () => {
  const game = useSelector((state) => state.games.currentGame);
  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__left">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="Youtube video player"
            frameBorder='0'
          ></iframe>
        </div>
        <div className="game-page__right">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="game-page__text-secondary">Жанры игры :</p>
          <div className="game-genre">{game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}</div>
          <div className="game-page__buy">
            <GameBuy game={game} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
