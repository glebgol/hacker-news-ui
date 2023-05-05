import {useEffect, useState} from "react";
import NewsForPreviewList from "./NewsForPreviewList";

const MainPage = () => {
    const [newsList, setNewsList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("/api/v1/newstories?count=100")
            .then(resp => resp.json())
            .then(r => {
                setNewsList(r);
                setIsLoaded(true);
            });
    }, [])

    return (
        <div>
            {(!isLoaded) && <h1>Loading..</h1>}
            {(isLoaded) && <NewsForPreviewList news={newsList} />}
        </div>
    )
}

export default MainPage;
