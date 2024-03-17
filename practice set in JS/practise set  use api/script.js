let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-02-17&sortBy=publishedAt&apiKey=a29342e8a95a47c0802da1fb084a1286"

let response = fetch(url)
response.then((v) => {
    return v.json();
}).then((newsItems) => {
    console.log(newsItems)   // it hold all data

    console.log(newsItems.articles)   
    let newsItem = newsItems.articles;  // newsItem hold all artical data in form of array 

    ihtml = ""

    for (item in newsItem) {
        console.log(newsItem[item]);
        ihtml += `
        
        <div class="card mx-1 my-2" style="width: 22rem;">
            <img src="${newsItem[item].urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${newsItem[item].title}</h5>
                <p class="card-text">${newsItem[item].description}</p>
                <a href="${newsItem[item].url}" class="btn btn-primary">Visit here</a>
            </div>
        </div>
        
        `
    }
    cardContainer.innerHTML = ihtml;
})
