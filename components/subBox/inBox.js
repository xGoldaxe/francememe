export default function InBox({json}) {
    return (
        <div className="subBox__inBox">
            <div>
                <div className="subBox__inBox__titleArrow">
                    <img src="/image/patreon/arrow.svg" alt="" />
                    <p className="subBox__inBox__title">{json.title}</p>
                </div>
                <div className="subBox__inBox__sub">
                    <a target="_blank" className="smallWhiteButton" href="https://www.patreon.com/bePatron?u=43528684">S'abonner</a>
                    <img src="/image/logo.webp" alt=""/>
                </div>
                <p  className="subBox__inBox__subTitle">{json.subTitle}</p>
                <h4>Avantages :</h4>
                <ul>
                    {json.avantages.map((avantage, i)=> 
                        <li key={i} dangerouslySetInnerHTML={{__html: avantage}}></li>
                    )}
                </ul>
                <a target="_blank" className="smallWhiteButton subBox__inBox__subBot" href="https://www.patreon.com/bePatron?u=43528684">S'abonner</a>
            </div>
            <div className="subBox__inBox__price">
                <p>{json.sellMessage}</p>
                <p className="subBox__inBox__price__value">{json.price + "€"}</p>
            </div>
        </div>
    )
}