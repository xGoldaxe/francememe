export default function Block({children, waving = false}) {
    return waving === true ? 
        (<div className="wavy">
            <div className="firstBlock wavyBlock">
                <div className="firstBlock--container">
                    {children}
                </div>
            </div>

            <div className="wavy__wave--top">
                    <img 
                        src="/image/wave.svg"
                        width="5721"
                        height="82"
                        alt=""
                    />            
                    <img 
                        src="/image/wave.svg"
                        width="5721"
                        height="82"
                        alt=""
                    />
            </div>
            <div className="wavy__wave--bottom">
                    <img 
                        src="/image/wave.svg"
                        width="5721"
                        height="82"
                        alt=""
                    />            
                    <img 
                        src="/image/wave.svg"
                        width="5721"
                        height="82"
                        alt=""
                    />
            </div>

        </div>)
        :
        (<div className="block">
            <div className="firstBlock">
                <div className="firstBlock--container">
                    {children}
                </div>
            </div>
        </div>)

}