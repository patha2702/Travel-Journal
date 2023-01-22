import React from "react"
import ReactDOM from "react-dom/client"


export default function Card(props){
    return (
        <section className="card">
            <img src={props.item.imageUrl} alt={props.item.title} className="cardImage"/>
            <div className="cardInfo">
            <div className="cardNavigation">
                    <img src="/src/assets/locationPin.png" alt="location Pointer" className="locationPin"/>
                    <h1 className="cardHeader">{props.item.location}</h1>
                    <div><a href={props.item.googleMapsUrl} className="mapLink">View on Google Maps</a></div>
                </div>
                <h2 className="cardSubHeader">{props.item.title}</h2>
                <div><span className="cardJourneyDate">{props.item.startDate} - {props.item.endDate}</span></div>
                <p className="cardDescription">
                    {props.item.description}
                </p>
            </div>
        </section>
    )
}

