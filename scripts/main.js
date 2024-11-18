
const fetchMovies = async () => {
  
  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2ab8438b08msh914a04f57efdea8p16523ajsna2902f63095c',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
  //add result to DOM
  const moviesList = document.getElementById('movies-list');
  result.forEach(movie => {
    const li = document.createElement('li');
    movieItem.innerHTML = `
    <img src="${movie.image}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p>${movie.description}</p>
    `;
    moviesList.appendChild(movieItem);
  })
} catch (error) {
	console.error(error);
}

}

fetchMovies();
