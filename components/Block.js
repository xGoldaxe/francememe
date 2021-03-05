export default function Block({children, waving = false}) {
    return waving === true ? 
        (<div className="wavy">
            <div className="firstBlock">
                {children}
            </div>


            <img 
                className="wavy__wave--top"
                src="/image/wave.svg"
                width="5721"
                height="82"
                alt=""
            />
            <img 
                className="wavy__wave--bottom"
                src="/image/wave.svg"
                width="5721"
                height="82"
                alt=""
            />

        </div>)
        :
        (<div className="block">
            <div className="firstBlock">
                {children}
            </div>
        </div>)

}