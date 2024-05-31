// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore, gameInProgress} = props
  return (
    <nav className="nav-container">
      <div className="title-with-score-container">
        <div className="title-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="game-logo"
          />
          <h1 className="title">Emoji Game</h1>
        </div>
        {gameInProgress && (
          <div className="score-container">
            <p className="score">{score}</p>
            <p className="score">{topScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
