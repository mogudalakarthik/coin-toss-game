// Write your code here
import {Component} from 'react'

import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImageResult: headsImageUrl,
    headsCounts: 0,
    tailsCounts: 0,
  }

  onTossCoin = () => {
    const {headsCounts, tailsCounts} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let newHeadsCounts = headsCounts
    let newTailsCounts = tailsCounts

    if (toss === 0) {
      tossImage = headsImageUrl
      newHeadsCounts += 1
    } else {
      tossImage = tailsImageUrl
      newTailsCounts += 1
    }

    this.setState({
      tossImageResult: tossImage,
      headsCounts: newHeadsCounts,
      tailsCounts: newTailsCounts,
    })
  }

  render() {
    const {tossImageResult, headsCounts, tailsCounts} = this.state
    const totalCount = headsCounts + tailsCounts

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={tossImageResult} className="image" alt="toss result" />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="result-list">
            <p className="details">Total:{totalCount}</p>
            <p className="details">Heads:{headsCounts}</p>
            <p className="details">Tails:{tailsCounts} </p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
