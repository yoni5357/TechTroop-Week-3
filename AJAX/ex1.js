async function useFetch(isbn){
    const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
    try{
        const res = await fetch(url + isbn);
        const data = await res.json();
        return data;
    }catch(err){
        throw new Error(err);
    }
}


useFetch(9780575087057).then(console.log);