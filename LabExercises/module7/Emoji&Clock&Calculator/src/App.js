import React, {useContext, useState} from 'react';
import {Calculator, CalculatorClass} from './components/Calculator'
import Clock from './components/Clock';
import {RenderEmojiClass, RenderEmojiFunction} from './components/RenderEmoji'
import { CurrentEmojiContext } from './context/EmojiContext';

function App() {
  const [currentEmoji, setCurrentEmoji] = useState(0)
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Regular Calculator - Function Component</h1>
      <Calculator/>
      <h1>Regular Calculator - Class Component</h1>
      <CalculatorClass/>
      <h1>Scientific Calculator - Function Component</h1>
      <h3>Supports nesting brackets :)</h3>
      <Calculator scientific={true}/>
      <h1>Scientific Calculator - Class Component</h1>
      <h3>Supports nesting brackets :)</h3>
      <CalculatorClass scientific={true}/>
      <h1>Clock</h1>
      <Clock/>
      <CurrentEmojiContext.Provider value={{currentEmoji, setCurrentEmoji}}>
        <h1>Rendering Emojis - Class Component</h1>
        <RenderEmojiClass/>
        <h1>Rendering Emojis - Function Component</h1>
        <RenderEmojiFunction/>
      </CurrentEmojiContext.Provider>
    </div>
  );
}

export default App;
