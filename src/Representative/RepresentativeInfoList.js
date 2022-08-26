

export default function RepresentativeInfoList(props) {
    const {name, district, phone, office} = props
    return(
        <div className="representativeInfoContainer">
            <h3 className="representativeInfoName">{name}</h3>
            <h3 className="representativeInfoDistrict">{district}</h3>
            <h3 className="representativeInfoPhone">{phone}</h3>
            <h3 className="representativeInfoOffice">{office}</h3>
        </div>
    )
}