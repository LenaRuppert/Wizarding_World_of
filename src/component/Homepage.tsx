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
                    <button className={"button-sorting"} onClick={getHouse}>Setze den Hut auf</button>
                    <p>Dein Haus ist: {sort} </p>
                </div>
            )
        }
