import "./Homepage.css"
import * as https from "https";

export default function HomePage(){
    return(
        <div className={"homepage"}>
        <h1>The Wizarding World of Dinah Ruppert</h1>

        <div>
            <p className={"p-homepage"}>Zu welchem Haus gehörst du?</p>
            <img src={"https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/27/1467979160-harry-potter-philosophers-sorting-hat.jpg?resize=980:*"} alt={"image of sorting head"}/>
        </div>
        </div>
    )
}