// @ts-nocheck
import React, {useRef} from 'react'
import "./List.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "../Listitem/ListItem"

const List = () => {

    const listRef = useRef();

    const handleClick = (direction) => {

        let distance = listRef.current.getBoundingClientRect().x - 50;
         if(direction === "left"){
             listRef.current.style.transform = `translateX(${230 + distance}px)`;
         }
         console.log(distance);
          if(direction === "right"){
             listRef.current.style.transform = `translateX(${-230 + distance}px)`;
         }
    }


    return (
        <div className="list">
         <span className="listTitle">Continue to watch </span>
            <div className="wrapper">
                <ArrowBackIosIcon className="SlideArrow left" onClick={() => handleClick("left")}/>
                <div className="container" ref={listRef}>
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    

                </div>
                <ArrowForwardIosIcon className="SlideArrow right" onClick={() => handleClick("right")}/>
            </div>
        </div>
    )
}

export default List
