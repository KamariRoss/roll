import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
//  Create a React app that has a button, and when the user clicks it, it displays a random number between 1 and 6.

class App extends React.Component {
  state = {
    diceResult: 0,
  }
  rollDice = () => {
    const result = Math.ceil(Math.random() * 6)
    console.log('Rolling dice', result)
    this.setState({ diceResult: result })
  }

  render() {
    return (
      <main>
        <h1>
          {this.state.diceResult}
          <button onClick={this.rollDice}>Roll Dice</button>
        </h1>
      </main>
    )
  }
}
export default App
