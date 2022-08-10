import React, {useState} from 'react';
import './Clock.css'

const Clock = () => {
    const [time, setTime] = useState(new Date())

    setInterval(() => {
        setTime(new Date())
    }, 1000);

    return (
        <>
            <ClockText time={time}/>
            <CircleClock time={time}/>
        </>
    )
}

const ClockText = ({time}) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    const AMOrPM = hours >= 12 ? 'PM' : 'AM'

    hours = hours > 12 ? hours - 12 : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <h1>The time is: {hours}:</h1>
            <h1 style={{color: 'red'}}>{minutes}</h1>
            <h1>:</h1>
            <h1 style={{color: 'green'}}>{seconds}</h1>
            <h1>{AMOrPM}</h1>
        </div>
    )
}

const CircleClock = ({time}) => {
    const seconds = time.getSeconds()
    const secondsHandRotateAmount = (seconds * 6) - 90
    const secondsHandStyle = {transform: `rotateZ(${secondsHandRotateAmount}deg)`}

    const minutes = time.getMinutes()
    const minuteHandRotateAmount = ((minutes * 6) + (seconds / 10)) - 90
    const minuteHandStyle = {transform: `rotateZ(${minuteHandRotateAmount}deg)`}
    
    const hours = time.getHours()
    const hourHandRotateAmount = (((hours > 12 ? hours - 12 : hours) * 30) + ((minutes / 12) * 6)) - 90
    const hourHandStyle = {transform: `rotateZ(${hourHandRotateAmount}deg)`}

    return (
        <div className='d-flex justify-content-center align-items-center mb-5'>
            <div id="clock" className='d-flex align-items-center'>

                <p id='num12'>12</p>
                <p id='num11'>11</p>
                <p id='num10'>10</p>
                <p id='num9'>9</p>
                <p id='num8'>8</p>
                <p id='num7'>7</p>
                <p id='num6'>6</p>
                <p id='num5'>5</p>
                <p id='num4'>4</p>
                <p id='num3'>3</p>
                <p id='num2'>2</p>
                <p id='num1'>1</p>

                <div id='secondHandContainer' style={secondsHandStyle}>
                    <div id='hiddenSecondHand'/>
                    <div id='shownSecondHand'/>
                    <div id='hiddenSecondHandTwo'/>
                </div>

                <div id='minuteHandContainer' style={minuteHandStyle}>
                    <div id='hiddenMinuteHand'/>
                    <div id='shownMinuteHand'/>
                    <div id='hiddenMinuteHandTwo'/>
                </div>

                <div id='hourHandContainer' style={hourHandStyle}>
                    <div id='hiddenHourHand'/>
                    <div id='shownHourHand'/>
                    <div id='hiddenHourHandTwo'/>
                </div>

                <div id='middleCircle'/>
                
            </div>
        </div>
    )
}

export default Clock;