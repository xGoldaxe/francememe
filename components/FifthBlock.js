import Image from 'next/image'

function FifthBlock() {
    return (
        <div className="firstBlock lastBlock">
            <div className="firstBlock__text lastBlock__text">
                <h2>C’est LA communauté du moment</h2>
                <p>
                    <strong>FRANCE MEMES</strong> a été créé en juin 2020, et en moins de 6 mois la communauté à déjà plus de 1700 membres. 
                    <br/><strong>FRANCE MEMES</strong>, aujourd’hui, c’est le plus gros serveur de memes en France, et peut-être bientôt le plus gros serveur Français.
                </p>
            </div>
            <Image src="/image/block5.png"
                alt="block Picture"
                width={497}
                height={431}
                />
        </div>
    )
}

export default FifthBlock