import Image from 'next/image'

function FirstBlock() {
    return (
        <div className="firstBlock">
            <Image src='/image/export.png'
                alt="first block illustration" 
                width="764"
                height="495"
                />
            <div className="firstBlock__text">
                <h2>Un lieu avec plein de place pour rire et discuter</h2>
                <p>Le serveur Discord est organisé en salons axés sur les memes, mais vous pouvez aussi partager vos créations, et discuter entres membres.</p>
            </div>
        </div>
    )
}

export default FirstBlock