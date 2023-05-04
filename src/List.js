import {useEffect, useState} from "react";
import NewsForPreviewList from "./components/NewsForPreviewList";

const List = () => {
    const [newsList, setNewsList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("/api/v1/newstories?count=5")
            .then(resp => resp.json())
            .then(r => {
                setNewsList(r);
                setIsLoaded(true);
            });
    }, [])

    return (
        <div>
            {(isLoaded) && <NewsForPreviewList news={newsList} />}
        </div>
    )
}

export default List;