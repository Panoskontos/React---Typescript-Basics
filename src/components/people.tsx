import React,{ useState }  from 'react';

// export interface to this file
import {IState as Iprops} from "../App"


 //----------- Handling Props ------------------ 
// //  Copying Interface
//  interface Iprops {
//     // people array with these variables
//     people: {
//       name: string;
//       age:number;
//       url:string;
//       dream?: string;
//     }[] 
//   }
  
  
// handling props
// declaring that it is a react FC with props interface
const PeopleList:React.FC<Iprops> = ({people}) => {
    
    // function to call to render data
    const renderList = () => {
        return people.map((p)=> {
            return(
            // list
            <li className="List">
                {/* data with html*/}
                <div className="List-header">
                    <img className="List-img" src={p.url}/>
                    <h2>{p.name}</h2>
                </div>
                <p>{p.age} years old</p>
                <p className="List-note">{p.dream}</p>
            </li>
            )
        })
    }


    return (
        <ul>
            {/* call function */}
            {renderList()}
        </ul>
    )
}

export default PeopleList