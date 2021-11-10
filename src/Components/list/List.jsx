import React from 'react'
import "./List.scss"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from "../Listitem/ListItem"

const List = () => {
    return (
        <div className="list">
         <span className="listTitle">Continue to watch </span>
            <div className="wrapper">
                <ArrowBackIosIcon />
                <div className="container">
                    <ListItem />
                </div>
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}

export default List
