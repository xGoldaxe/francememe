import Image from 'next/image'


function ThirdBlock() {
    return (
        <div className="firstBlock">
            <Image src="/image/block3.png "
                alt="block Picture" 
                width={739}
                height={480}
            />
            <div className="firstBlock__text">
                <h2>Nos créateurs inquiètent Twitter et Instagram</h2>
                <p>
                    Instagram ne fait que copier Twitter,
                    <br/>Twitter c’est toujours du drama,
                    <br/>et Facebo…                        
                    <img className='facecat'
                        src="/image/facecat.png"
                        alt=""
                        width={33}
                        height={20}
                    />
                    <br/><strong>FRANCE MEMES</strong> c’est du contenu original tous les jours grâce à nos créateurs originaux tel que Speedwagon et un système de like pour un super fil d’actualité !
                </p>
            </div>
        </div>
    )
}

export default ThirdBlock