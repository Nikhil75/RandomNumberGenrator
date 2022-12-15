import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  randomNumber = () => {
    const randomNumbergenerator = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      random: randomNumbergenerator,
    }))
  }

  render() {
    const {random} = this.state
    return (
      <div className="RandomNumberContainer">
        <div className="RandomContainer">
          <h1 className="randomNumberHead">Random Number</h1>
          <p className="instruction">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            className="generateButton"
            type="button"
            onClick={this.randomNumber}
          >
            Generate
          </button>
          <p className="Number">{random}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
