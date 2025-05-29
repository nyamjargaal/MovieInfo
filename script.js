const searchButton = document.querySelector(".searchBtn");
const searchForm = document.querySelector("form")
const movieContainer = document.querySelector(".movie-container")
const inputBox = document.querySelector(".inputBox")


const getMovieInfo = async(kinoNer) => {
    const MyApiKey = "f354af57";
    const url = `https://www.omdbapi.com/?apikey=${MyApiKey}&t=${kinoNer}`;
    const response = await fetch(url);
    const data = await response.json()
    // console.log(data)
    showMovieData(data);
}

const showMovieData = (data) => {
    movieContainer.innerHTML = ""
    const {Title, imdbRating, Genre, Released, Runtime,
         Actors, Plot, Poster} = data;

    const movieElement = document.createElement('div')
    movieElement.innerHTML = `<h1>${Title}</h1>
                              <p>${Runtime}</p> 
                              <p>${imdbRating}</p> 
                              <p>${Genre}</p> 
                              <p>${Released}</p> 
                              <p>${Actors}</p> 
                              <p>${Plot}</p>                 
                              `
    movieElement.classList.add("movie-info")                     
    const moviePosterElement = document.createElement('div') 
    moviePosterElement.classList.add('movie-poster')
    moviePosterElement.innerHTML = `<img src = "${Poster}"/>`

    movieContainer.appendChild(moviePosterElement)
    movieContainer.appendChild(movieElement)
}  

searchForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    const movieNer = inputBox.value.trim()
    if(movieNer !== ''){
        getMovieInfo(movieNer)
    }
})



    




// console.log(searchButton);
