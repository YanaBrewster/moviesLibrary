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
  },
  {
    id: 6,
    title: "Fight Club",
    year: 1999,
    directors: ["David Fincher"],
    bio:"An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
    movieLength:139,
    genre: ["drama"],
    poster: "fightclub.jpg"
  },
  {
    id: 7,
    title: "Forrest Gump",
    year: 1994,
    directors: ["Robert Zemeckis"],
    bio:"The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    movieLength:142,
    genre: ["drama"],
    poster: "forrestgump.jpg"
  },
  {
    id: 8,
    title: "The Lord of the Rings: The Fellowship of the Ring ",
    year: 2001,
    directors: ["Peter Jackson"],
    bio:"A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
    movieLength:178,
    genre: ["adventure", "drama"],
    poster: "lotr1.jpg"
  },
  {
    id: 9,
    title: "The Good, the Bad and the Ugly",
    year: 1966,
    directors: ["Sergio Leone"],
    bio:"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
    movieLength: 161,
    genre: ["western"],
    poster: "thegoodthebadtheugly.jpg"
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King ",
    year: 2003,
    directors: ["Peter Jackson"],
    bio:"Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    movieLength:201,
    genre: ["adventure", "drama"],
    poster: "lotr3.jpg"
  },
  {
    id: 11,
    title: "12 Angry Men",
    year: 1957,
    directors: ["Sidney Lumet"],
    bio:"A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    movieLength:96,
    genre: ["drama"],
    poster: "12angrymen.jpg"
  },
  {
    id: 12,
    title: "The Godfather: Part II",
    year: 1974,
    directors: ["Francis Ford Coppola"],
    bio:"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    movieLength:202,
    genre: ["crime"],
    poster: "thegodfather2.jpg"
  },

]


var maxNumberOnScreen = 4;
var numberOfPages = Math.ceil(movies.length / maxNumberOnScreen);

// var x = 0;
if(maxNumberOnScreen > movies.length){
    // console.log("There are not enough movies in the database to fill the entire screen");
    showMovieThumbnails(0, movies.length);
} else {
    // console.log("there is more movies than the max on screen");
    showMovieThumbnails(0, maxNumberOnScreen);
}


function showMovieThumbnails(start, end){
  document.getElementById('moviesList').innerHTML = "";
  // console.log("clicked on page" + (end /4));
  // console.log(start);
  // console.log(end);
    for (var i = start; i < end; i++) {
      var movie = movies[i];

        var movieCard = '<div class="col-12 col-sm-6 col-md-3 mb-3 text-center">';
            movieCard += '<div class="movieThumb movieThumb2 card h-100" data-id="'+movie.id+'">';
                movieCard += '<img src="images/'+movie.poster+'" class="card-img-top" alt="">';
                movieCard += '<div class="card-body">';
                    movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
                movieCard += '</div>';
            movieCard += '</div>';
        movieCard += '</div>';

        document.getElementById('moviesList').innerHTML += movieCard;
    }
}


if(numberOfPages > 1){
    var pagination = document.getElementById('paginationMovies');
    for (var i = 0; i < numberOfPages; i++) {
        pagination.innerHTML += '<li class="page-item"><a onclick="showMovieThumbnails('+(maxNumberOnScreen * i)+', '+(maxNumberOnScreen * (i+1))+')" class="page-link" href="#">'+(i+1)+'</a></li>';

    }
}

// p2 start 8 end 11

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
  } else if (genre === 'crime'){
    return 'danger';
  }else if (genre === 'adventure'){
    return 'success';
  } else if(genre === 'western'){
    return 'warning';
  } else{
    return  'dark';
  }
}
