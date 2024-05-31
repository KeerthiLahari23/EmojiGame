

import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedImgsList: [],
    topScore: 0,
    gameInProgress: true,
  }

  onResetGame = () => {
    this.setState({clickedImgsList: [], gameInProgress: false})
  }

  renderScoreCard = () => {
    const {clickedImgsList} = this.state
    const {emojisList} = this.props
    const isWon = clickedImgsList.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        score={clickedImgsList.length}
        onClickPlayAgain={this.onResetGame}
      />
    )
  }

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  clickEmoji = id => {
    const {emojisList} = this.props
    const {clickedImgsList} = this.state
    const isEmojiPresent = clickedImgsList.includes(id)
    const clickedImgsLength = clickedImgsList.length
    if (isEmojiPresent) {
      this.finishGameAndsetTopScore(clickedImgsLength)
    } else {
      if (emojisList.length - 1 === clickedImgsLength) {
        this.finishGameAndsetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedImgsList: [...prevState.clickedImgsList, id],
      }))
    }
  }

  finishGameAndsetTopScore(currentScore) {
    const {topScore, gameInProgress} = this.state
    let newscore = topScore

    if (currentScore > topScore) {
      newscore = currentScore
    }
    this.setState({topScore: newscore, gameInProgress: false})
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-list-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            clickEmoji={this.clickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedImgsList, gameInProgress, topScore} = this.state
    return (
      <div className="app-container">
        <NavBar
          score={clickedImgsList.length}
          gameInProgress={gameInProgress}
          topScore={topScore}
        />
        <div className="emoji-game-body">
          {gameInProgress ? this.renderEmojisList() : this.renderScoreCard()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
