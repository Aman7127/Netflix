// @ts-nocheck
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import football from "../../video/football.mp4"
import "./Watch.scss"

const Watch = () => {
    return (
        <div>
            <div className="watch">
                <div className="back">
                    <ArrowBackIcon />
                    Home
                </div>
                <video className="video" progress controls src={football}/>
            </div>
        </div>
    )
}

export default Watch
