import React, { Component } from 'react'

class App extends Component {
  state = {
    hue: 75,
    saturation: 75,
    lightness: 75,
  }

  handleMoveHueSlider = event => {
    this.setState({ hue: event.target.value })
    console.log(event.target.value)
  }
  handleMoveSaturationSlider = event => {
    this.setState({ saturation: event.target.value })
    console.log(event.target.value)
  }
  handleMoveLightnessSlider = event => {
    this.setState({ lightness: event.target.value })
    console.log(event.target.value)
  }
  render() {
    const currentColor = `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`

    return (
      <>
        <header>
          <h1>COLOR PICKER</h1>
        </header>
        <body>
          <figure style={{ backgroundColor: currentColor }}></figure>
          <div>
            <section>
              <h2>HUE {this.state.hue}</h2>
              <input
                type="range"
                name="Hue"
                min="0"
                max="360"
                onChange={this.handleMoveHueSlider}
              ></input>
            </section>
            <section>
              <h2>SATURATION {this.state.saturation}%</h2>
              <input
                type="range"
                id="saturation"
                name="saturation"
                min="0"
                max="100"
                onChange={this.handleMoveSaturationSlider}
              ></input>
            </section>
            <section>
              <h2>LIGHTNESS {this.state.lightness}%</h2>
              <input
                type="range"
                id="lightness"
                name="lightness"
                min="0"
                max="100"
                onChange={this.handleMoveLightnessSlider}
              ></input>
            </section>
          </div>
          <div>
            <button>Random Color</button>
          </div>
        </body>
      </>
    )
  }
}

export default App
