import React, {Component, useState} from 'react'
import './App.css';
import {RenderEmojiClass, RenderEmojiFunction} from './components/RenderEmoji'
import {Calculator} from './components/Calculator'

function App() {
  const [showWarning, setShowWarning] = useState(true);
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
      alert("The component is getting unmounted")
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
      <h1>Rendering Emojis - Class Component</h1>
      <RenderEmojiClass/>
      <h1>Rendering Emojis - Function Component</h1>
      <RenderEmojiFunction/>
      <h1>Calculator Function</h1>
      <Calculator/>
    </div>
  );
}

export default App;
