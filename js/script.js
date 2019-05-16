var movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    directors: ["Frank Darabont"],
    bio: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    movieLength: 142,
    genre: ["drama"],
    poster: "shawshank.jpg"
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    directors: ["Francis Ford Coppola"],
    bio: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    movieLength: 175,
    genre: ["crime","drama"],
    poster: "thegodfather.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    directors: ["Christopher Nolan"],
    bio:"When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    movieLength: 152,
    genre: ["drama"],
    poster: "thedarkknight.jpg"
  },
  {
    id: 4,
    title: "Schindler's List",
    year: 1993,
    directors: ["Steven Spielberg"],
    bio: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis",
    movieLength: 195,
    genre: ["drama"],
    poster: "schindlerslist.jpg"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    year: 1994,
    directors: ["Quentin Tarantino"],
    bio:"The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    movieLength:195,
    genre: ["crime"],
    poster: "pulpfiction.jpg"
  }
]

console.log(movies);
var moviesList = document.getElementById('moviesList');

for (var i = 0; i < movies.length; i++) {
  var movie = movies[i];


  // How to write it(text) into HTML:

  // Way #1
  // document.getElementById("moviesList").innerHTML += "<p>"+movie.title+ "</p>"

  // moviesList.innerHTML +=  '<div class="col-12 col-sm-6 col-md-4">';
  //       moviesList.innerHTML += '<div class="card">';
  //       moviesList.innerHTML += '</div>';
  // moviesList.innerHTML +=  '</div>';

// Way #2
var genreClass = getGenreColour(movie.genre[0]);
// function colour(){
//   var genreClass = validate(border-primary)
// }
// var genreClass= '';
// if (movie.genre[0] === 'drama') {
//   genreClass = 'border-primary';
// } else{
//   genreClass = 'border-danger';
// }



var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
  movieCard += '<div class="movieThumb card h-100 border-'+genreClass+'"  " onclick="showMoreMovie('+movie.id+')">';
  // movieCard += '<div class="movieThumb2 card h-100 '+genreClass+' " data-id="'+movie.id+'">';
  movieCard += '<img src="images/'+movie.poster+'" class="card-img-top" alt="">';
    movieCard += '<div class="card-body">';
      movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
    movieCard += '</div>';
  movieCard += '</div>';
movieCard += '</div>';


moviesList.innerHTML += movieCard;

// Way #3
  // var columns = document.createElement('div');
  // var columnsAttr = document.createAttribute('class');
  // columnsAttr.value = 'col-12 col-sm-6 col-md-4';
  // columns.setAttributeNode(columnsAttr);
  //
  // var card = document.createElement('div');
  // var cardAttr = document.createAttribute('class');
  // cardAttr.value = 'card';
  // card.setAttributeNode(cardAttr);
  //
  // var cardBody = document.createElement('div')
  // var cardBodyAttr =document.createAttribute('class')
  // cardBodyAttr.value = 'card-body';
  // cardBody.setAttributeNode(cardBodyAttr);
  //
  // var cardTitle = document.createElement('h5')
  // var cardTitleAttr =document.createAttribute('class')
  // cardTitleAttr.value = 'card-title';
  // var cardTitleText = document.createTextNode(movie.title);
  //
  // cardTitle.appendChild(cardTitleText);
  // cardBody.appendChild(cardTitle);
  // card.appendChild(cardBody);
  // columns.appendChild(card);
  //
  // moviesList.appendChild(columns);

}


// POP UP MOVIE INFO

function showMoreMovie(movieNumber){
  var singleMovie;
    // console.log("you have clicked on a movie");
    console.log(movieNumber);
    for (var i = 0; i < movies.length; i++) {

      if (movies[i].id === movieNumber) {
          console.log(movies[i]);
          singleMovie = movies[i];
          break;

      }
    }
     console.log(singleMovie);
     document.getElementById('posterImage').src = 'images/'+singleMovie.poster;
     document.getElementById('movieTitle').innerText = singleMovie.title;
     document.getElementById('movieYear').innerText = singleMovie.year;
     document.getElementById('movieDirectors').innerHTML = '<li class="list-inline-item">'+singleMovie.directors+'</li>';
     // ^ only for 1 director. Below for more than 1 director
     // for (var i = 0; i < singleMovie.directors.length; i++) {
     //   console.log(singleMovie.directors[i]);
     //   document.getElementById('movieDirectors').innerHTML = '<li class="list-inline-item">' +singleMovie.directors[i]+"</li>";
     // }

     document.getElementById('movieBio').innerText = singleMovie.bio;
     document.getElementById('movieLength').innerText = singleMovie.movieLength;
     document.getElementById('movieGenre').innerHTML = '';

     for (var i = 0; i < singleMovie.genre.length; i++) {
       var genreColour = getGenreColour(singleMovie.genre[i]);
       // if (singleMovie.genre[i] === 'drama'){
       //   genreColour = 'badge-primary';
       // } else {
       //   genreColour = 'badge-danger';
       // }
       document.getElementById('movieGenre').innerHTML += '<span class= "badge badge-'+genreColour+' mr-1">'+singleMovie.genre[i]+'</span>';
     }

    document.getElementById('moviePopUp').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

var movieThumbnails = document.getElementsByClassName('movieThumb2');
for (var i = 0; i < movieThumbnails.length; i++) {
  var id = parseInt(movieThumbnails[i].dataset.id);
  movieThumbnails[i].onclick = function(){
    var id= parseInt(this.dataset.id);
  // <---- second way
    showMoreMovie(id);
  };
}

document.getElementById('close').onclick = function () {
  document.getElementById('moviePopUp').style.display = 'none';
  document.body.style.overflow = 'scroll';
};

// COLOUR DEFINER FUNCTION

function getGenreColour(genre){
  if (genre === 'drama') {
    return  'primary';
  } else{
    return  'danger';
  }
}
