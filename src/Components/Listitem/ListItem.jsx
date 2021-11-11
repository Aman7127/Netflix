import "./ListItem.scss"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useState } from "react";

const ListIem = ({index}) => {

    const [isHovered , setIsHovered] = useState(false);
     const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";

    return (
        <div className="ListItem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} 
        style={{left : isHovered && index * 225 - 50 + index * 2.5}}>
             <img
                src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee"
                alt=""
            />
            {isHovered && (
                <>
            <video src={trailer} autoPlay={true} loop/>
            <div className="iteminfo">
                <div className="icons">
                    <PlayArrowIcon className="icon"/>
                    <AddIcon className="icon"/>
                    <ThumbUpIcon className="icon"/>
                    <ThumbDownIcon className="icon"/>
                </div>
                <div className="iteminfotop">
                    <span>1 hour 69 mins</span>
                    <span className="limit">18+</span>
                    <span>1999</span>
                </div>
                <div className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <div className="genre">
                    Action
                </div>
            </div>
            </>
            )}
            
        </div>
    );
}

export default ListIem
