import {render} from "react-dom";

const thumbnailUrl = `https://i.ytimg.com/vi`
const thumbnailFormat = `frame0.jpg`

export function Short({id, subscribed, creator, title, date}: {
    id: string,
    subscribed: boolean,
    creator: string,
    title: string,
    date: Date
}) {

    return <div className={"short-container"}>

        <div className={"short"} style={{backgroundImage: `url(${thumbnailUrl}/${id}/${thumbnailFormat})`}}>
            <div className={"short-links-container"}></div>
            <div className={"short-info-container"}>

            </div>
        </div>


    </div>

}