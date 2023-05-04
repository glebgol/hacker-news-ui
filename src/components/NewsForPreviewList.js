import NewsPreviewItem from "./NewsPreviewItem";

const NewsForPreviewList = (props) => {
    const list = props.news;
    return (
        <ul className='basket list-group col-md-4'>l
            <li className='list-group-item active'>Корзина</li>
            {list.map((item) => {
                return <NewsPreviewItem props={item}/>
            })}
        </ul>
    );
};

export default NewsForPreviewList;