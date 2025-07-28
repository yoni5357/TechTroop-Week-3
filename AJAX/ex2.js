async function useFetch(queryType, queryValue){
    const base = 'https://www.googleapis.com/books/v1/volumes?q=';
    const url = base + `${encodeURIComponent(queryType)}:${encodeURIComponent(queryValue)}`;
    try{
        const res = await fetch(url);
        const data = await res.json();

        if(data.totalItems > 0){
            return data.items[0];
        }
        return data;
    }catch(err){
        throw new Error(err);
    }
}

useFetch("isbn", 9789814561778).then(console.log) // - From Third World to First: The Singapore Story
useFetch("title", "How to Win Friends and Influence People").then(console.log) // - book by Dale Carnegie