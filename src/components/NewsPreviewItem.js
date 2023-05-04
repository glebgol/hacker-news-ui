const NewsPreviewItem = (props) => {
    return (
        <li className='list-group-item'>
            nnnj{props.score} {props.title} {props.authorName}
        </li>
    );
};

export default NewsPreviewItem;