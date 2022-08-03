import logo from './logo.svg';
import './App.css';
import React, {Component, useState} from 'react'
import ClassHello from './components/ClassHello';
import FunctionHello from './components/FunctionHello';

var _ = require('lodash')

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		this.timerID = setInterval(() => {
			this.tick()
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		this.setState({
			date: new Date()
		})
	}

	render() {
		return(
			<div>
				<h1>Sebastian's Clock</h1>
				<h2>The time is currently {this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}
}

function HidingEverythingText({hidingEverything}) {
	if (hidingEverything) {
		return <h1>Every component on this webpage is hiding right now.</h1>
	} else {
		return <h1>Every component is showing as normal on this webpage.</h1>
	}
}

function HidingEverythingSmiley({hidingEverything}) {
	let smiley = null
	if (hidingEverything) {
		smiley = <h1>:)</h1>
	}

	return(
		<div>
			{smiley}
		</div>
	)
}

function App({name}) {
	const [hideEverything, setHideEverything] = useState(false)
	const [showNyanCat, setShowNyanCat] = useState(true)
	const comment = {
		date: new Date(),
		text: 'I hope you enjoy learning React!',
		author: {
			name: 'Hello Kitty',
			avatarUrl: 'http://placekitten.com/g/64/64'
		}
	};
	
	function formatDate(date) {
		return date.toLocaleDateString();
	}
	
	function Comment(props) {
		return (
			<div className="Comment">
				<UserInfo data={props.author}/>
				<div className="Comment-text">
					{props.text}
				</div>
				<div className="Comment-date">
					{formatDate(props.date)}
				</div>
			</div>
		);
	}
		
	function UserInfo({data}) {
		return (
			<div className="UserInfo">
				<img className="Avatar"
					src={data.avatarUrl}
					alt={data.name} 
				/>
				<div className="UserInfo-name">
					{data.name}
				</div>
			</div>
		)
	}

	function NyanCatPhoto({showNyanCat}) {
		if (!showNyanCat) return null

		return (
			<img
				src="https://cdn.vox-cdn.com/thumbor/SiIyeqmKIJGcOJccz94pHgwmgvQ=/0x0:1400x1400/1200x800/filters:focal(588x588:812x812):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/68837730/poptart1redrainbowfix_1.0.gif"
				alt="Nyan Cat"
				onClick={() => {
					setShowNyanCat(false); 
					setTimeout(() => {
						setShowNyanCat(true)
					}, 5000)
				}}
				style={{cursor: 'pointer'}}
			/>
		)
	}

	class NumberList extends Component {
		constructor() {
			super();
			this.state = {
				numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				listOfItems: []
			}
		}

		componentDidMount() {
			this.listItems()
		}

		componentDidUpdate(prevProps, prevState) {
			if (prevState.numbers !== this.state.numbers) this.listItems()
		}

		listItems() { 
			this.setState({
				listOfItems: this.state.numbers.map(number => <li key={number.toString()}>{number}</li>)
			})
		}

		handleClick() {
			this.setState(({numbers}) => {
				console.log('setting state')
				const newNumbers = _.cloneDeep(numbers)
				newNumbers.push(newNumbers.length + 1)
				return {numbers: newNumbers}
			}, () => {
				this.listItems()
			})
		}

		render() {
			return(
				<>
					<button onClick={() => {this.handleClick.call(this)}}>
						Add {this.state.numbers.length + 1} to the list
					</button>
					<ul>{this.state.listOfItems}</ul>
				</>
			)
		}
	}

	class Toggle extends React.Component {
		constructor(props) {
		  super(props);
		  this.state = {isToggleOn: true};
		  // This binding is necessary to make `this` work in the callback
		  this.handleClick = this.handleClick.bind(this);
		}
		handleClick() {
			console.log(this)
		  	this.setState(prevState => ({
				isToggleOn: !prevState.isToggleOn
		  	}));
		}
		// boolean my_bool=false
		render() {
		  return (
			<button onClick={this.handleClick}>
			  {this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		  );
		}
	}

	class ComponentOne extends React.Component {

		// Defining the componentWillUnmount method
		componentWillUnmount() {
			alert('The component is going to be unmounted');
		}
		
		render() {
			return <h1>Hello Geeks!</h1>;
		}
	}
		
		class ComponentTwo extends React.Component {
		state = { display: true };
		delete = () => {
			this.setState({ display: false });
		};
		
		render() {
			let comp;
			if (this.state.display) {
			comp = <ComponentOne />;
			}
			return (
			<div>
				{comp}
				<button onClick={this.delete}>
				Delete the component
				</button>
			</div>
			);
		}
		}
			
	return (
		<div className="App">
			<button 
				onClick={() => {
					setHideEverything(hideEverything => !hideEverything)
				}}
				style={{border: '1px solid transparent', borderRadius: 20, backgroundColor: 'red', color: 'white', fontWeight: 'bold', fontSize: 20, paddingLeft: 10, paddingRight: 10, paddingBottom: 30, paddingTop: 30, cursor: 'pointer'}}
			>
				{hideEverything ? 'Show Everything' : 'Hide Everything'}
			</button>
			<HidingEverythingText hidingEverything={hideEverything}/>
			<HidingEverythingSmiley hidingEverything={hideEverything}/>
			{hideEverything ?
				<img
					src="https://www.pngmart.com/files/11/Doge-Meme-PNG-Free-Download.png"
					alt="Doge"
				/>
			:
				<div>
					<h1>Nothing out of the ordinary here</h1>
				</div>
			}
			{!hideEverything && (
				<>
					<img src={logo} className="App-logo" alt="logo" />
					<table className="rainbowColor" cellSpacing="0">
						<thead>
							<tr>
								<th>Column 1</th>
								<th>Column 2</th>
								<th>Column 3</th>
								<th>Column 4</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Data 1</td>
								<td>Data 2</td>
								<td>Data 3</td>
								<td>Data 4</td>
							</tr>
							<tr>
								<td>Data 5</td>
								<td>Data 6</td>
								<td>Data 7</td>
								<td>Data 8</td>
							</tr>
							<tr>
								<td>Data 9</td>
								<td>Data 10</td>
								<td>Data 11</td>
								<td>Data 12</td>
							</tr>
							<tr>
								<td>Data 13</td>
								<td>Data 14</td>
								<td>Data 15</td>
								<td>Data 16</td>
							</tr>
						</tbody>
					</table>
					<ClassHello name={name}/>
					<FunctionHello name={name}/>
					<Comment {...comment}/>
					<Clock/>
					<NumberList/>
					<ComponentTwo/>
					<Toggle/>
					{showNyanCat && <h1>Click the nyan cat image to hide it for 5 seconds.</h1>}
					<NyanCatPhoto showNyanCat={showNyanCat}/>
				</>
			)}
		</div>
	);
}
			
export default App;
			