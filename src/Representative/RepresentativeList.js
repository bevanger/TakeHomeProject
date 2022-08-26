import { useState } from 'react';

export default function RepresentativeList(props, id) {
    const [representative, setRepresentative] = useState([{id}])

    const { name, party, district, phone, office } = props;

    const onSubmit = evt => {
        evt.preventDefault()
    }

    const onChange = evt => {
        const { name, value } = evt.target;
        setRepresentative({...representative, [name]:value})
    }

    return(
        <div className="representativeList">
            <div className="representativeName">
            <h3>{name}</h3>
            </div>
            <div className="representativeParty">
            <h3>{party}</h3>
            </div>
        </div>
    )
} 