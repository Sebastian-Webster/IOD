import React, {Component, useContext, useState} from 'react';
import { CurrentEmojiContext, EmojiListContext } from '../context/EmojiContext';

class RenderEmojiClass extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      return (
        <EmojiListContext.Consumer>
          {emojiList => (
            <CurrentEmojiContext.Consumer>
              {({currentEmoji, setCurrentEmoji}) => (
                <div>
                  <h1>{emojiList[currentEmoji]}</h1>
                  <button
                    onClick={() => {
                      if (currentEmoji + 1 > emojiList.length - 1) setCurrentEmoji(0)
                      else setCurrentEmoji(currentEmoji + 1)
                    }}
                  >
                    Go to the next emoji
                  </button>
                </div>
              )}
            </CurrentEmojiContext.Consumer>
          )}
        </EmojiListContext.Consumer>
      )
    }
}

function RenderEmojiFunction() {
    const emojiList = useContext(EmojiListContext)
    const {currentEmoji, setCurrentEmoji} = useContext(CurrentEmojiContext)

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