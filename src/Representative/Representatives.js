import axios from 'axios';
import { useState, useEffect } from 'react';
import RepresentativeList from './RepresentativeList';


function Representatives(props)  {
    const [representatives, setRepresentatives] = useState([]);
    const state = "UT";

    useEffect(() => {
       const getRepresentatives = () => {
            axios
            .get(`http://localhost:3000/representatives/${state}`)
            .then(response => {
                console.log(response.data)
                setRepresentatives(response.data)
            })
            .catch(error => {
                console.log(error);
            });
        }
        getRepresentatives(); 
    }, []);

    return (
        <div>
            <div>
                <h1 className='representativesHeader'>List/Representatives</h1>
            </div>
            <div className='representativesListHeader'>
                <h2 className='representativesNameHeader'>Name</h2>
                <h2 className='representativesPartyHeader'>Party</h2>
            </div>
            <div className='representativeContainer'>
                {representatives.results?.map(representative => (
                    <RepresentativeList key={representative.id} name={representative.name} party={representative.party} />
                ))}
            </div>
        </div>
    )
}

export default Representatives;