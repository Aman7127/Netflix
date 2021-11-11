// @ts-nocheck
import React, {useState , useRef} from 'react'
import "./List.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "../Listitem/ListItem"

const List = () => {

    const [slideNumber , setslideNumber] = useState(0);
    const [isMoved , setIsMoved] = useState(false);
    const listRef = useRef();

    const handleClick = (direction) => {
        setIsMoved(true);
        let distance = listRef.current.getBoundingClientRect().x - 50;
         if(direction === "left" && slideNumber > 0){
             setslideNumber(slideNumber -1);
             listRef.current.style.transform = `translateX(${230 + distance}px)`;
         }
          //console.log(distance);
          if(direction === "right" && slideNumber <5){
             setslideNumber(slideNumber + 1);
             listRef.current.style.transform = `translateX(${-230 + distance}px)`;
         }
    }


    return (
        <div className="list">
         <span className="listTitle">Continue to watch </span>
            <div className="wrapper">
                <ArrowBackIosIcon className="SlideArrow left" onClick={() => handleClick("left")} style={{display : !isMoved && "none"}}/>
                <div className="container" ref={listRef}>
                    <ListItem index={0}/>
                    <ListItem index={1}/>
                    <ListItem index={2}/>
                    <ListItem index={3}/>
                    <ListItem index={4}/>
                    <ListItem index={5}/>
                    <ListItem index={6}/>
                    <ListItem index={7}/>
                    <ListItem index={8}/>
                    <ListItem index={9}/>
                    

                </div>
                <ArrowForwardIosIcon className="SlideArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
