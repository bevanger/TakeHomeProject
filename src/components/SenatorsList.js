export default function SenatorsList(props) {
    const { name, party } = props;

    return(
        <div className="senatorList">
            <div className="senatorName">
            <h3>{name} {party}</h3>
            </div>
            <div className="senatorParty">
            </div>
        </div>
    )
} 