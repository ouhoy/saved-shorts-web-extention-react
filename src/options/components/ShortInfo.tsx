export function ShortInfo({id, subscribed, creator, title, date}: {
    id: string,
    subscribed: boolean,
    creator: string,
    title: string,
    date: Date
}) {
    return <div className={"short-info"}>
        <div className={"title"}>
            <a title="Play the video in a new tab." target="_blank" href={`https://www.youtube.com/shorts/${id}`}><p
                className="short-title">${title}</p></a>
        </div>
        <div></div>
    </div>
}