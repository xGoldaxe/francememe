import Image from 'next/image'

function FourthBlock() {
    return (
        <div className="firstBlock">
            <div className="firstBlock__text">
                <h2>Une modération à votre service</h2>
                <p>
                    Nous avons intégré un règlement hors-pair. Une équipe de modération dévouée pour s’occuper des nuisibles efficacement.
                    (oui même à 2h du matin)
                </p>
            </div>
            <img src="/image/block4.png"
                alt="block Picture" 
                width={690}
                height={420}
            />
        </div>
    )
}

export default FourthBlock