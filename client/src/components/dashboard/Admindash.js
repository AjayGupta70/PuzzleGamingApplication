import React, {useState} from 'react'
import './Admindash.css'
import Pushlvl from './Pushlvl'
import Performance from './Performance'


const Admindash = ({ user }) => {

    const [pageinfo, setPageinfo] = useState({
        push:false,
        info: false,
    })

    const pushlevel = () => {
        setPageinfo({
            push:true,
            info: false,
        })
    }

    const showData = () => {
        setPageinfo({
            push:false,
            info: true,
        })
    }

    return (
        <div className='mgn' style={{height:"90vh", backgroundColor:"#ddc2c2"}} >
            {(pageinfo.push===false && pageinfo.info===false) ? <><div><span className='adTxt' >The PuzzLe Application Configuration</span></div>
            
            {/* <span className='adTxt2'> The PuzzLe Application Configuration</span> */}
            <div className="">

                <button
                    style={{
                        width: "99vw",
                        borderRadius: "30px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    onClick={pushlevel}
                    className="btn btn-large waves-effect waves-light hoverable red accent-3"
                >
                    Add-Level
                </button>
                <br />
                <button
                    style={{
                        width: "99vw",
                        borderRadius: "30px",
                        letterSpacing: "1.5px",
                        marginTop: "1rem"
                    }}
                    onClick={showData}
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                    Leaderboard
                </button>
                <br />

            </div></>:""}
            {pageinfo.push===true && pageinfo.info===false ? <Pushlvl /> : ""}
            {pageinfo.push===false && pageinfo.info===true ? <Performance /> : ""}
        </div>
    )
}

export default Admindash