import React, {Component, useState} from 'react';

class RenderEmojiClass extends Component {
    constructor(props) {
      super(props)
      this.state = {
        emojiList: ['😍', '😛', '💗', '😮', '🙃'],
        currentEmoji: 0
      }
    }

    render() {
      return (
        <div>
          <h1>{this.state.emojiList[this.state.currentEmoji]}</h1>
          <button
            onClick={() => {
              if (this.state.currentEmoji + 1 > this.state.emojiList.length - 1) this.setState({currentEmoji: 0})
              else this.setState(oldState => {
                let oldCurrentEmoji = oldState.currentEmoji
                oldCurrentEmoji += 1
                return {currentEmoji: oldCurrentEmoji}
              })
            }}
          >
            Go to the next emoji
          </button>
        </div>
      )
    }
}

function RenderEmojiFunction() {
    const [emojiList, setEmojiList] = useState(['😍', '😛', '💗', '😮', '🙃'])
    const [currentEmoji, setCurrentEmoji] = useState(0)

    return(
      <div>
        <h1>{emojiList[currentEmoji]}</h1>
        <button
          onClick={() => {
            if (currentEmoji + 1 > emojiList.length - 1) setCurrentEmoji(0)
            else setCurrentEmoji(currentEmoji => currentEmoji + 1)
          }}
        >
          Go to the next emoji
        </button>
      </div>
    )
}

export {RenderEmojiClass, RenderEmojiFunction}