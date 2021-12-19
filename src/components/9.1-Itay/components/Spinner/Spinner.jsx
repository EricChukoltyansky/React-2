import React from 'react'
import './spinner.css'

class Spinner extends React.Component {
    constructor(){
        super()
        this.state = {randNum: null}
    }
    componentDidMount(){
        const rand = Math.floor(Math.random() * 3)
        this.setState(() => { return { randNum: rand}})
    }

    render() {
        const spinners = [
            (
                <div className="spinner-wrapper">
                <div className="dots-container">
                    <div className="dot bobbing-dot-1"></div>
                    <div className="dot bobbing-dot-2"></div>
                    <div className="dot bobbing-dot-3"></div>
                </div>
            </div>
            ),
            (
                <div class="spinner-wrapper">
                <div class="dots-container">
                    <div class="dot flickering-dot-1"></div>
                    <div class="dot flickering-dot-2"></div>
                    <div class="dot flickering-dot-3"></div>
                </div>
            </div>
            ),
            (
                <div class="spinner-wrapper">
                <div class="spinner spinner-2"></div>
                </div>
            )
        ]
        return (
            <div className="container">
                {spinners[this.state.randNum]}
            </div>
        )
    }
}

export default Spinner