export function ShortInfo({id, avatar, creator, title, date}: {
    id: string,
    creator: string,
    avatar: string,
    title: string,
    date: Date
}) {
    return <div className={"short-info-container"}>
        <div className={"short-info"}>
            <div className={"title"}>
                <a title="Play the video in a new tab." target="_blank" href={`https://www.youtube.com/shorts/${id}`}><p
                    className="short-title">${title}</p></a>
            </div>
            <div className={"about-creator"}>

                <div className={"creator-avatar"}>
                    <img src={avatar} alt={creator}/>
                </div>

                <div className={"creator-name"}>
                    <a target="_blank" href={`https://www.youtube.com/${creator}`}>
                        <p>${creator}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
}