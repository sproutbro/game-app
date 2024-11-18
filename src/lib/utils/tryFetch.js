const tryFetch = async (url, option) => {
    try {
        const response = await fetch(url, option);
        return response.json();
    } catch (error) {
        console.error(error);
    }
}

export default tryFetch