export default function Block({children, waving = false}) {
    return waving === true ? 
        (<div className="wavy">
            <div className="firstBlock">
                {children}
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
                {children}
            </div>
        </div>)

}