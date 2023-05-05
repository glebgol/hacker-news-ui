import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";

const NewsPreviewItem = (props) => {
    const previewItem = props.item;
    return (
        <ListItem>
            <ListItemText primary={previewItem.authorName + ": " + previewItem.title}
                          secondary={previewItem.date + " score: " + previewItem.score} />
            <Link to={"news/" + previewItem.id}>Details</Link>
        </ListItem>
    );
};

export default NewsPreviewItem;