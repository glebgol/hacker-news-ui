import NewsPreviewItem from "./NewsPreviewItem";
import List from "@mui/material/List";

const NewsForPreviewList = (props) => {
    const list = props.news;
    return (
        <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
            {list.map((item) => {
                return <NewsPreviewItem item={item}/>
            })}
        </List>
    );
};

export default NewsForPreviewList;