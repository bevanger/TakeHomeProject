import axios from 'axios';
import { useState, useEffect } from 'react';
import SenatorList from '../Representative/RepresentativeList';

function Senators()  {
    const [senators, setSenators] = useState([]);
    const state = "UT";

    useEffect(() => {
       const getSenators = () => {
            axios
            .get(`http://localhost:3000/senators/${state}`)
            .then(response => {
                setSenators(response.data)
            })
            .catch(error => {
                console.log(error);
            });
        }
        getSenators(); 
    }, []);

    return (
        <div>
            <h1 className='senatorsHeader'>List/Senators</h1>
            <div>
            <div className='senatorsListHeader'>
                <h2 className='senatorsNameHeader'>Name</h2>
                <h2 className='senatorsPartyHeader'>Party</h2>
            </div>
                {senators.results?.map(senator => (
                    <SenatorList key={senator.id} name={senator.name} party={senator.party} state={senator.state} district={senator.district} phone={senator.phone} office={senator.office} link={senator.link}/>
                ))}
            </div>
        </div>
    )
}

export default Senators;