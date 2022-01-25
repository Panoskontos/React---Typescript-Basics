import React,{ useState }  from 'react';
import {IState as Props} from "../App"

interface Iprops {
    people: Props["people"];
    // copied it from the IState interface
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddCrewMember:React.FC<Iprops> = ({people, setPeople}) => {

    // function to add members
    const [input, setInput] = useState({
        name:"",
        age:"",
        img:"",
        dream:""
    })

    // what the input is changing
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        setInput({
            // whatever input is
            ...input,
            [e.target.name]:e.target.value
        })
    }

    // handle submit button
    // append input to the people array inside App.tsx
    const handleClick = ():void => {
        if(
            !input.name || !input.age || !input.img 
        ) {
            return 
        }
        setPeople([
            ...people,
            {
                name:input.name,
                age:parseInt(input.age),
                url:input.img,
                dream:input.dream,
            }
        ])

        setInput({
            name:"",
            age:"",
            img:"",
            dream:""
        })
    }

    // What HTML will return
    return (
        <div className="AddToList">
            <input type="text" placeholder='Name' className="AddToList-input" value={input.name} onChange={handleChange} name="name"/>
            <input type="number" placeholder='Age' className="AddToList-input" value={input.age} onChange={handleChange} name="age"/>
            <input type="text" placeholder='Image' className="AddToList-input" value={input.img} onChange={handleChange} name="img"/>
            <input type="text" placeholder='Purpose' className="AddToList-input" value={input.dream} onChange={handleChange} name="dream"/>
            <button className="AddToList-btn" onClick={handleClick}>Create</button>
        </div>
    )
}

export default AddCrewMember