/*

Front-end :::: app.js

*/

import React from 'react';
import { Component } from 'react';
import { FaWater, FaChevronUp, FaChevronDown, FaCheck } from 'react-icons/fa';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      serverEndpoint: 'http://localhost:8000',
      dateSelected: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      people: []
      // end data
    }
  }

  /** component mounting */
  async componentDidMount() {
    console.log('mounted');

    // update date
    let date = this.state.dateSelected.split('-')[1];
    if (date < 10) { date = '0' + date.toString(); }
    this.setState({
      dateSelected: new Date().getFullYear() + '-' + date + '-' + new Date().getDate()
    });

    await this.getWaterData();

    if (!this.state.people[0].days[this.state.dateSelected]) {
      let newDayPeople = JSON.parse(JSON.stringify(this.state.people));
      newDayPeople.forEach(person => {
        person.days[this.state.dateSelected] = 0;
      });

      this.setState({
        people: newDayPeople
      })
    }
    // console.log(this.state.people[0].days[this.state.dateSelected])
  }

  createDayPicker = () => {
    if (this.state.people.length > 0) {

      console.log(this.state.people[0]);

      let picker = Object.keys(this.state.people[0].days).map((day, idx, arr) => {

        console.log(this.state.dateSelected);
        console.log(day);

        let highlight = 'not-selected';
        if (this.state.dateSelected === day) {
          highlight = 'selected'
        }
        // TODO thsi needs to be an intermediate builder intermediate 
        return (
          <div key={idx} onClick={() => this.selectData(day)} className={highlight}>
            {day}
          </div>
        )
      });
      return picker;
    } else {
      return <div>Nothing here yet</div>
    }
  }

  selectData = (day) => {
    // e.preventDefault();
    this.setState({
      dateSelected: day
    });

    console.log()
  }

  createMainDisplay = () => {
    let html = this.state.people.map((person, idx, arr) => {
      let full = person.days[this.state.dateSelected] >= 6 ? 'complete' : 'incomplete'
      return (
        <div key={idx}>
          <div className="name">
            {person.name}
          </div>
          <div className={full}><FaCheck /></div>
          <div className="display">
            <div className="add" onClick={() => this.addWater(person.name, this.state.dateSelected)}>
              <FaChevronUp />
            </div>
            <div className="amount">
              {person.days[this.state.dateSelected]} <span> / 6</span>
            </div>
            <div className="remove" onClick={() => this.removeWater(person.name, this.state.dateSelected)}>
              <FaChevronDown />
            </div>
          </div>
        </div>
      )
    })
    return html;
  }

  addWater = (name, date) => {
    let newPeopleData = JSON.parse(JSON.stringify(this.state.people));
    newPeopleData.forEach((person, idx, arr) => {
      if (person.name === name) {
        person.days[date]++
      }
    });
    this.setState({
      people: newPeopleData
    })
    // console.log(newPeopleData);

    fetch(this.state.serverEndpoint + '/api/water/add', {
      method: 'POST',
      body: JSON.stringify(newPeopleData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(r => r.json()).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
  removeWater = (name, date) => {
    let newPeopleData = JSON.parse(JSON.stringify(this.state.people));
    newPeopleData.forEach((person, idx, arr) => {
      if (person.name === name) {
        person.days[date]--;
      }
    });
    this.setState({
      people: newPeopleData
    })
    // console.log(newPeopleData);

    fetch(this.state.serverEndpoint + '/api/water/remove', {
      method: 'POST',
      body: JSON.stringify(newPeopleData),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(r => r.json()).then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })

  }

  getWaterData = async () => {
    return fetch(this.state.serverEndpoint + '/api/water/get', { method: 'GET' }).then(r => r.json()).then(res => {
      console.log(res);
      this.setState({
        people: res.people
      })
      return res;
    }, err => {
      console.error(err);
    });
  }

  /** Navigation / Header */
  navigation = () => {
    return (
      <div className="navigation">
        <FaWater /> Water Tracker
      </div>
    )
  }

  /** rener function */
  render() {

    let nav = this.navigation();
    let dayPicker = this.createDayPicker();
    let mainDisplay = this.createMainDisplay();

    return (
      <div className="app-wrapper">
        {nav}
        <div className="day-picker">
          {dayPicker}
        </div>
        <div className="main-display">
          {mainDisplay}
        </div>
        {/* {peeps} */}
      </div>
    )
  }

  // --- END APP COMPONENT --- //
}

export default App;
