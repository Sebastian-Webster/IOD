import React, {Component, PureComponent, useState, useReducer} from 'react'
import ReactDOM from 'react-dom';
import './App.css';
import {RenderEmojiClass, RenderEmojiFunction} from './components/RenderEmoji'
import {Calculator, CalculatorClass} from './components/Calculator'
import MemoComponent from './components/MemoComponent';
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import {UserProvider} from './components/context/NameContext'
import ContextDemoA from './components/ContextDemoA';
import { NameContextTwo } from './components/context/NameContext2';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import HookCounter from './components/HookCounter';
import ReactHookWithObjs from './components/ReactHookWithObjs';
import ReactHookWithArrays from './components/ReactHookWithArrays';
import UseEffectHook from './components/UseEffectHook';
import MouseContainer from './components/MouseContainer';
import DataFetch from './components/DataFetch';
import DataFetchTwo from './components/DataFetchTwo';
import Clock from './components/Clock';
import ContextDemoE from './components/ContextDemoE';
import UseReducerCounter from './components/UseReducerCounter';
import UseReducerCounterTwo from './components/UseReducerCounter2';
import { GlobalCounterContext } from './components/context/GlobalCounterContext';
import CounterThree from './components/CounterThree';
import CounterFour from './components/CounterFour';
import CounterFive from './components/CounterFive';
import DataFetchWithUseReducer from './components/DataFetchWithUseReducer';
import { CurrentEmojiContext } from './components/context/EmojiContext';
import Counter from './components/Counter';
import UseMemoDemo from './components/UseMemoDemo';
import FocusInput from './components/UseRefDemo';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CounterWithCustomHookOne from './components/CounterWithCustomHookOne';
import CustomHookForm from './components/CustomHookForm';

const GlobalCountInitialState = 0
function GlobalCountReducer(state, action) {
  switch(action.type) {
    case 'increment':
      return state + action.value
    case 'decrement':
      return state - action.value
    case 'reset':
      return GlobalCountInitialState
    default:
      return state
  }
}

function App() {
  var verbose = false;
  const [showWarning, setShowWarning] = useState(true);
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('Sebastian')
  const [count, dispatchCount] = useReducer(GlobalCountReducer, GlobalCountInitialState)
  const [currentEmoji, setCurrentEmoji] = useState(0)
  class MountingExample extends Component {
    constructor(props) {
      super(props) //Call the constructor method for React.Component
      this.state = {
        favoriteColor: 'red'
      } //Set the favoriteColor state to red
    }

    componentDidMount() {
      this.setState({
        favoriteColor: 'yellow'
      })
    }

    render() { //Outputs the HTML to the DOM.
      return (
        <div style={{border: '1px solid red'}}>
          <h3>My favorite color is {this.state.favoriteColor}</h3> 
          {/* Will show as yellow because as soon as the component gets mounted the favorite color changes to yellow */}
        </div>
      )
    }
  }

  class UpdatingExample extends Component {
    constructor(props) {
      super(props)
      this.state = {
        favoriteColor: 'red'
      }
    }

    changeColor = () => {
      this.setState(oldState => {
        let oldFavoriteColor = oldState.favoriteColor
        oldFavoriteColor = oldFavoriteColor === 'red' ? 'blue' : 'red'
        return {favoriteColor: oldFavoriteColor}
      })
    }

    shouldComponentUpdate() { //Have some logic in here to check if the component should update.
      return true; //If this is false, the component will not update.
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { // This method provides what the state and props object looked like before the update
      document.getElementById('div1').textContent = 'My favorite color used to be ' + prevState.favoriteColor
    }

    componentDidUpdate() { //This method gets called after the component gets updated
      document.getElementById('div2').textContent = "My favorite color is now " + this.state.favoriteColor
    }

    render() {
      return (
        <div>
          <h1>My favorite color is {this.state.favoriteColor}</h1>
          <button type="button" onClick={this.changeColor}>Change Color</button>
          <div id="div1"></div>
          <div id="div2"></div>
        </div>
      )
    }
  }

  function SubmitForm() {
    const [name, setName] = useState("");
    const [preventDefault, setPreventDefault] = useState(true)
  
    const handleSubmit = (event) => {
      console.log(name);
      if (preventDefault) event.preventDefault();
    };

    const handleTogglePreventDefault = () => {
      setPreventDefault(preventDefault => !preventDefault)
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={handleTogglePreventDefault}>Prevent Default: {preventDefault ? 'ON' : 'OFF'}</button>
      </>
    );
  }

  class UnmountingExample extends Component {
    constructor(props) {
      super(props)
      this.state = {
        show: true
      }
    }

    toggleHeader = () => {
      this.setState(oldState => {
        let oldShow = oldState.show
        oldShow = oldShow === true ? false : true
        return {show: oldShow}
      })
    }

    render() {
      let myheader;
      if (this.state.show) {
        myheader = <UnmountingExampleChild/>
      }

      return(
        <div>
          {myheader}
          <button type="button" onClick={this.toggleHeader}>{this.state.show ? 'Hide' : 'Show'} Header</button>
        </div>
      )
    }
  }

  class UnmountingExampleChild extends Component {
    componentWillUnmount() {
      verbose && console.log("The component is getting unmounted")
    }

    render() {
      return (
        <h1>Hello World!</h1>
      )
    }
  }

  function LoginButton({onClick}) {
    return <button onClick={onClick}>Login</button>
  }

  function LogoutButton({onClick}) {
    return <button onClick={onClick}>Logout</button>
  }

  function GreetingText({isLoggedIn}) {
    return isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please log in!</h1>
  }

  class Greeting extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoggedIn: false
      }
    }

    handleLoginButtonClick = () => {
      this.setState({
        isLoggedIn: true
      })
    }

    handleLogoutButtonClick = () => {
      this.setState({
        isLoggedIn: false
      })
    }

    render() {
      return (
        <>
          <GreetingText isLoggedIn={this.state.isLoggedIn}/>
          {this.state.isLoggedIn ?
            <LogoutButton onClick={this.handleLogoutButtonClick}/>
          :
            <LoginButton onClick={this.handleLoginButtonClick}/>
          }
        </>
      )
    }
  }

  class NullReturn extends Component {
    constructor(props) {
      super(props)
    }

    componentDidMount() {
      if (!this.props.warn) {
        alert('Warning has been mounted')
      }
    }

    componentDidUpdate() {
      if (!this.props.warn) alert('Warning has been updated')
    }

    componentWillUnmount() {
      if (!this.props.warn) alert('Warning will be unmounted')
    }

    render() {
      return this.props.warn ? <h1>WARNING</h1> : null
    }
  }

  class NumbersList extends Component {
    constructor(props) {
      super(props)
    }

    listItems = this.props.numbers.map(number => <li key={number.toString()}>{number}</li>)

    render() {
      return <ul>{this.listItems}</ul>
    }
  }

  const Blog = ({posts}) => {
    const sidebar = (
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    )
    const content = posts.map(post => (
      <div key={post.id} style={{border: '1px solid black', marginTop: 10}}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    ))

    return (
      <div>
        {sidebar}
        <hr/>
        {content}
      </div>
    )
  }

  const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
  ]
  
  class Fragments extends Component {
    render() {
      return (
        <>
          <h1>This is a Fragment demo.</h1>
          <FragmentsDemo/>
        </>
      );
    }
  }
  
  function FragmentsDemo() {
    return (
      <>
        <h1>I am inside of a fragment</h1>
        <p>I am inside of a fragment too</p>
      </>
    )
  }
  
  class PureDemoParent extends PureComponent {
    constructor(props) {
      super(props)

      this.state = {
        name: "Sebastian"
      }
    }

    componentDidMount() {
      var interval = setInterval(() => {
        this.setState({name: 'Sebastian'})
      }, 1000);
      setTimeout(() => {
        clearInterval(interval)
        setInterval(() => {
          this.setState({name: this.state.name === 'Sebastian' ? 'Bharath' : 'Sebastian'})
        }, 2000);
      }, 5000);
    }

    render() {
      return (
        <div>
          <h3>Pure and Regular Component parent - Check console</h3>
          <RegularComponentDemo name={this.state.name}/>
          <PureComponentDemo name={this.state.name}/>
        </div>
      )
    }
  }

  class RegularComponentDemo extends Component {
    render() {
      verbose && console.log('REGULAR COMPONENT IS RENDERING')
      return(
        <>
          <h1>Regular Component</h1>
          <h1>{this.props.name}</h1>
        </>
      )
    }
  }

  class PureComponentDemo extends PureComponent {
    render() {
      verbose && console.log('PURE COMPONENT IS RENDERING')
      return(
        <>
          <h1>Pure Component</h1>
          <h1>{this.props.name}</h1>
        </>
      )
    }
  }

  class PureComponentWithArrays extends PureComponent {
    constructor(props) {
      super(props)
      this.state = {
        data: []
      }
    }
  }

  class Modal extends Component {
    render() {
      return ReactDOM.createPortal(
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            height: '100%'
          }}
          onClick={this.props.onClose}
        >
          <div
            style={{
              padding: 20,
              background: '#fff',
              borderRadius: 2,
              display: 'inline-block',
              minHeight: 300,
              margin: '1rem',
              position: 'relative',
              minWidth: 300,
              boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
              justifySelf: 'center'
            }}
          >
            {this.props.children}
            <hr/>
            <button onClick={this.props.onClose}>Close</button>
          </div>
        </div>,
        document.getElementById('portal-root')
      )
    }
  }

  function handleShowModalClick() {
    setShowModal(true)
  }

  function handleCloseModal() {
    setShowModal(false)
  }
  
  
  return (
    <div className="App">
      <h1>React Lifecycle Methods Examples</h1>
      <h2>Mounting Example</h2>
      <MountingExample/>
      <h2>Updating Example</h2>
      <UpdatingExample/>
      <h2>Unmounting Example</h2>
      <UnmountingExample/>
      <h1>Prevent Default</h1>
      <SubmitForm/>
      <h1>Conditional Rendering - Login and Logout</h1>
      <Greeting/>
      <h1>Returning null still calls lifecycle methods - Warning</h1>
      <NullReturn warn={showWarning}/>
      <button 
        onClick={() => {
          setShowWarning(false)
          setTimeout(() => {
            setShowWarning(true)
          }, 1000);
        }}
      >
        Try It Out
      </button>
      <h1>Lists and Keys - Numbers List</h1>
      <NumbersList numbers={[1, 2, 3, 4, 5]}/>
      <h1>Lists and Keys - Blog</h1>
      <Blog posts={posts}/>
      <h1>Calculator - Function Component</h1>
      <Calculator scientific={false}/>
      <h1>Scientific Calculator - Function Component</h1>
      <h1>Doesn't support nesting brackets yet :)</h1>
      <Calculator scientific={true}/>
      <h1>Calculator - Class Component</h1>
      <CalculatorClass scientific={false}/>
      <h1>Scientific Calculator - Class Component</h1>
      <h2>Doesn't support nesting brackets yet :)</h2>
      <CalculatorClass scientific={true}/>
      <h1>React Fragments</h1>
      <Fragments/>
      <h1>PureComponent</h1>
      <PureDemoParent/>
      <h1>Memo Component</h1>
      <MemoComponent/>
      <h1>Click Counter</h1>
      <ClickCounter name="Sebastian"/>
      <h1>Hover Counter</h1>
      <HoverCounter name="Sebastian"/>
      <h1>Pure Component with Arrays</h1>
      <h2>...</h2>
      <h1>Modal - ReactDOM.createPortal</h1>
      <button onClick={handleShowModalClick}>Show Secret Modal</button>
      {showModal ? (
        <Modal onClose={handleCloseModal}>
          This is the secret modal message!
        </Modal>
      ) : null}
      <h1>React Context Demo</h1>
      <NameContextTwo.Provider value={{name, setName}}>
        {/*<UserProvider value="Sebastian"> DO NOT PROVIDE PROVIDER IF YOU WANT TO USE DEFAULT VALUE*/}
          <ContextDemoA/>
        {/*</UserProvider>*/}
      </NameContextTwo.Provider>
      <h1>Post List - Fetching Data in React</h1>
      <PostList/>
      <h1>Post Form - POST data in React</h1>
      <PostForm/>
      <h1>React Hooks - useState - Counter</h1>
      <HookCounter initialCount={0}/>
      <h1>React Hooks - useState with Objects - Name form</h1>
      <ReactHookWithObjs/>
      <h1>React Hooks - useState with Arrays</h1>
      <ReactHookWithArrays/>
      <h1>React Hooks - useEffect</h1>
      <UseEffectHook/>
      <h1>React Hooks - useEffect - Event Listeners and ComponentWillUnmount like funtionality</h1>
      <MouseContainer/>
      <h1>Data Fetch with useEffect</h1>
      <DataFetch/>
      <h1>Data Fetch</h1>
      <DataFetchTwo/>
      <h1>Clock - useState</h1>
      <Clock/>
      <CurrentEmojiContext.Provider value={{currentEmoji, setCurrentEmoji}}>
        <h1>Rendering Emojis - Class Component</h1>
        <RenderEmojiClass/>
        <h1>Rendering Emojis - Function Component</h1>
        <RenderEmojiFunction/>
      </CurrentEmojiContext.Provider>
      <h1>useContext Demo</h1>
      <NameContextTwo.Provider value={{name, setName}}>
        <ContextDemoE/>
      </NameContextTwo.Provider>
      <h1>useReducer - Counter</h1>
      <UseReducerCounter/>
      <h1>useReducer with object actions - Counter</h1>
      <UseReducerCounterTwo/>
      <h1>Global Counter - useReducer and useContext</h1>
      <GlobalCounterContext.Provider value={{count, dispatchCount}}>
        <h3>{count}</h3>
        <CounterThree/>
        <CounterFour/>
        <CounterFive/>
      </GlobalCounterContext.Provider>
      <h1>Data Fetch with useReducer</h1>
      <DataFetchWithUseReducer/>
      <h1>Counter</h1>
      <Counter/>
      {/*
        <h1>useMemo Demo - Fetching Coinmap API data</h1>
        <UseMemoDemo/>
      */}
      <h1>UseRef Demo</h1>
      <FocusInput/>
      <h1>Hook Timer</h1>
      <HookTimer/>
      <h1>Custom Hooks - Change document title</h1>
      <DocTitleOne/>
      <DocTitleTwo/>
      <h1>Custom Hooks - Counter</h1>
      <CounterWithCustomHookOne/>
      <h1>Custom Hooks - Form</h1>
      <CustomHookForm/>
    </div>
  );
}

export default App;
