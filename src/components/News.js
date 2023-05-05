import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

const News = () => {
    const params = useParams()
    const id = params.id;

    const [news, setNews] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("/api/v1/story/" + id)
            .then(resp => resp.json())
            .then(r => {
                setNews(r);
                setIsLoaded(true);
            });
    }, [])
    return (
        <div>
            {!isLoaded && <h1>Loading..</h1>}
            {isLoaded &&
                <ListItem>
                    <ListItemText
                        primary={
                        "Author: " + news.authorName + ":\n" + news.title
                    }
                        secondary={
                        news.date + " score: " + news.score + " comments: " + news.commentsCount
                    } />
                    <ListItemText
                        primary={
                            <a href={news.storyUrl}>Link to story</a>
                        }
                        />
            </ListItem>
            }
            <Link to="/" >Back to main page</Link>
        </div>


    );
};

export default News;
