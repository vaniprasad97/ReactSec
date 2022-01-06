import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="main">
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`../images/${props.coverImg}`} 
                className="card--image" 
            />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span>From {props.price}</span> / person
            </p>
        </div>
        </div>
    )
}