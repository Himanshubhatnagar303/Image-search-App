const accessKey = "m0JEczy697rvZPtWPT4lrra6VAmjc5lfXfmg9XKO6Fg";

const formEl = document. querSelecter("form")
const inputEl = document.getElementryById("search-input")
const searchResults = document.querySelecter(".search-results")
const showMore = document.getElementById("show-more-button")

let inputData =""
let page = 1;

async function searchimage (){
    inputData = inputEl.value;
    const url ='https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}'

    const response = await fetch(url)
    const data = await response. json()

    const results = data.results

    if (page ===1) {
        searchResults.innerHTML = ""
    }
 
    results.map((result) =>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search result")
        const image = document.createElement ('img')
        image.src = result.urls.small 
        image.alt =result.alt_description
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = "__blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        imageWrapper.appendChild(imagWrapper);
    })

    page++
    if(page > 1){
       showMore.style.display = "block"
    }
}

formEl.addEventListner("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages()
})

showMore.addEventListner("click", () =>{
     searchImages()
})