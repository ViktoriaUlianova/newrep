import './heroes.css';

function Heroes(props) {
    return (
        <div class = 'heroes'>
            <div className = "hero-name">{props.hero}</div>
            <div className = "universe">{props.universe}</div>
            <div className = "alterEgo">{props.alterEgo}</div>
            <div className = "occupation">{props.occupation}</div>
            <div className = "friends">{props.friends}</div>
            <div className = "superPower">{props.superPower}</div>
            <div className = "more">{props.more}</div>
            <img src = {props.url} alt="hero"></img>
            <div className = "rate">{props.rate}</div>
        </div>
    )
}

export default Heroes;