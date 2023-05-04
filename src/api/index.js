export const fetchRecentNews = async () => {
    try {
        const response = await fetch("/api/v1/newstories?count=5");
        return response.json();
    } catch (e) {
        console.error(e);
    }
}
