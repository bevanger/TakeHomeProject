import { useState } from 'react';


const Header = () => {
    const [representatives, setRepresentatives] = useState([])
    
    const onChange = evt => {
        const { name, value } = evt.target;
        setRepresentatives({...representatives, [name]:value })
    }

    const onSubmit = evt => {
        evt.preventDefault()
    }

    return (
        <div>
            <h1 className='headerTitle'>Who's My Representative</h1>
            <form className='dropDown' onSubmit={onSubmit}>
                <select
                    className='chooseRepresentative'
                    name='representative'
                    value={representatives.name}
                    onChange={onChange}
                >
                 <option value=''>Select Representative</option>
                 <option value='Rob Bishop'>Rob Bishop</option>
                 <option value='Chris Stewart'>Chris Stewart</option> 
                 <option value='John Curtis'>John Curtis</option>
                 <option value='Ben McAdams'>Ben McAdams</option>  
                </select>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Header;