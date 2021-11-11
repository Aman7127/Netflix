// @ts-nocheck
import "./Home.scss"
import Navbar from "../../Components/Navbar/Navbar"
import Featured from "../../Components/Featured/Featured"
import List from "../../Components/list/List"

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured type="Series"/>
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home
