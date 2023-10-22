import {ShortInfo} from "./ShortInfo";
import {ShortOptions} from "./ShortOptions";



const thumbnailUrl = `https://i.ytimg.com/vi`
const thumbnailFormat = `frame0.jpg`

export function Short({id, creator, avatar, title, date}: {
    id: string,
    creator: string,
    avatar: string,
    title: string,
    date: Date
}) {

    return <div className={"short-container"}>

        <div className={"short"} style={{backgroundImage: `url(${thumbnailUrl}/${id}/${thumbnailFormat})`}}>
            <ShortOptions id={id}/>
            <ShortInfo id={id} creator={creator} avatar={avatar} title={title} date={date}/>
        </div>


    </div>

}