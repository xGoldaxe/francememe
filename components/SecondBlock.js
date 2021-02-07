import Image from 'next/image'

function SecondBlock() {
    return (
        <div className="firstBlock">
            <div className="firstBlock__text">
                <h2>La quintessence de Discord</h2>
                <p>
                Divertis-toi en ces temps difficiles, + de 50 salons disponibles, 
                dont un feed alimenté par un algorithme ultra-performant. Sans blague, <strong>FRANCE MEMES</strong> est tellement 
                divertissant qu’il devrait être subventionné par le gouvernement !
                </p>
            </div>
            <Image src="/image/block2.png"
                alt="second block illustration" 
                width={682}
                height={442}
            />
        </div>
    )
}

export default SecondBlock