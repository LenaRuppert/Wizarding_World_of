import "./Homepage.css"
import * as https from "https";
import {useEffect, useState} from "react";

type HomepageProps = {

}

export default function HomePage(){

            const [sort, setSort] = useState("")

            function getHouse(){
                const houses = ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]
                const randomNumber = Math.floor(Math.random() * houses.length)
                setSort(houses[randomNumber])
            }


            return (
                <div className={"homepage"}>
                    <p className={"p-homepage"}>Zu welchem Haus gehörst du?</p>
                    <img className={"sorting-head"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTHAAuTDMjhD3d9VvtLaSowd9njGbYlAwivA&usqp=CAU"} onClick={getHouse}/>
                    <p> {sort} </p>
                </div>
            )
        }
