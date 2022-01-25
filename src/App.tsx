// useState is responsible for storing data inside a component
import React, { useState } from 'react';
import './App.css';

// Components
import AddCrewMember from './components/addCrewMember';
import PeopleList from './components/people'

// export = access to other files
  //----------- Handling States ------------------ 
  export interface IState {
    // people array with these variables
    people: {
      name: string;
      age:number;
      url:string;
      dream?: string;
    }[]
  }
  
function App() {

  // array of people
  const [ people, setPeople ] = useState<IState["people"]>([
    // adding 1 element
    {
      name:"Luffy",
      age:18,
      url:"https://esquilo.io/png/thumb/9Uj4FAf8SMIqiZd-Monkey-D-Luffy-PNG-File.png",
      dream:"Be the Pirate King"
    },
    {
      name:"Zoro",
      age:21,
      url:"http://www.e-oro.gr/images/detailed/303/SRPH67K1-8.png",
      dream:"Be the Best Swordsman"
    },
  ])


// ----------------------------------------------------
 
  return (
    <div className="App">
      <h1>Straw Hat Crew</h1>
      {/* people parameter prints list */}
      <PeopleList people={people}/>
      {/* set people parameter pushes on the list */}
      <AddCrewMember people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
