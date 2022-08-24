import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDark: true,
  }

  onTouch = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const backGround = isDark ? 'dark' : 'light'
    const but = isDark ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg">
        <div className={`card ${backGround}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onTouch}>
            {but}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
