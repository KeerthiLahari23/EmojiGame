// Write your code here.
import './index.css'

const LOSS_IMG = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WIN_IMG = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imgUrl = isWon ? WIN_IMG : LOSS_IMG
  const gameStatus = isWon ? 'You Won' : 'You Loss'
  const gameScore = isWon ? 'Best Score' : 'Score'
  return (
    <div className="win-loss-card">
      <div className="details-card">
        <h1 className="game-status">{gameStatus}</h1>
        <p className="game-score">{gameScore}</p>
        <p className="score">{score}/12</p>
        <button type="button" className="play-again-button">
          Play Again
        </button>
      </div>
      <div className="img-container">
        <img src={imgUrl} className="win-or-loss-img" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
