import React from "react"
import wreee from '../assets/wreee.mp3';
import exclaim from '../assets/exclaim.mp3';
import exclamation from "../assets/exclamation.png"


export default class GalaxySNote7 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      panicked: false,
    }

    this.squeelAudio = new Audio(wreee);
    this.exclaimAudio = new Audio(exclaim);
    this.exclaimAudio.addEventListener("ended", () => {
      this.throwAFit()
    }, false)
  }

  throwAFit = () => {
    this.setState({panicked: true})
  }

  relax = () => {
    this.setState({panicked: false})
  }

  exclaim = () => {
    console.log('Galaxy Props:', this.props)

    if (this.state.panicked) return
    this.exclaimAudio.play()
    this.squeelAudio.play()
    this.props.alterEnvironment(this.props.environment)
  }

  panic = () => (
    <img
      id="galaxy-exclamation"
      className="exclamation"
      src={exclamation} alt=""
    />)

  render() {
    return(
      <div id="galaxy-s-note" onClick={this.exclaim}>
        {(this.state.panicked) ? this.panic() : null}
      </div>
    )
  }
}
