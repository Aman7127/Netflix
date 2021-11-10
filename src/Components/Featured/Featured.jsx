import "./Featured.scss"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Featured = () => {
    return (
        <div className="featured">
             <img 
                src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 alt=" "
                 width="100%"
                />
               <div className="info" >
                     <img 
                     src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1"
                     alt=" "
                     
                     />
                     <span className="desc">
                         orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

                     </span>
                     <div className="buttons">
                        <button className="play">
                            <PlayCircleOutlineIcon />
                            <span>play</span>
                        </button>
                        <button className="more">
                            <InfoOutlinedIcon />
                            <span>info</span>
                        </button>

                     </div>
               </div> 
        </div>
    )
}

export default Featured
