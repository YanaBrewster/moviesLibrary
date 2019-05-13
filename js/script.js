var movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    directors: ["Frank Darabont"],
    bio: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    length: 142,
    poster: "shawshank.jpg"
  },
  {
    id: 2,
    title: "The Godfather",
    year: 1972,
    directors: ["Francis Ford Coppola"],
    bio: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    length: 175,
    poster: "thegodfather.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    directors: ["Christopher Nolan"],
    bio:"When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    length: 152,
    poster: "thedarkknight.jpg"
  },
  {
    id: 4,
    title: "Schindler's List",
    year: 1993,
    directors: ["Steven Spielberg"],
    bio: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis",
    length: 195,
    poster: "schindlerslist.jpg"
  },
  {
    id: 5,
    title: "Pulp Fiction",
    year: 1994,
    directors: ["Quentin Tarantino"],
    bio:"The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    length:195,
    poster: "pulpfiction.jpg"
  }
]

console.log(movies);
var moviesList = document.getElementById('moviesList');

for (var i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
  var movie = movies[i];
  // console.log(movie.title);

  // How to write it(text) into HTML
  // Way #1
  // document.getElementById("moviesList").innerHTML += "<p>"+movie.title+ "</p>"

  // moviesList.innerHTML +=  '<div class="col-12 col-sm-6 col-md-4">';
  //       moviesList.innerHTML += '<div class="card">';
  //       moviesList.innerHTML += '</div>';
  // moviesList.innerHTML +=  '</div>';

// Way #2
// var movieCard = '<div class="col-12 col-sm-6 col-md-4">';
//   movieCard += '<div class="card">';
//     movieCard += '<div class="card-body">';
//       movieCard += '<h5 class="card-title">'+movie.title+'</h5>';
//     movieCard += '</div>';
//   movieCard += '</div>';
// movieCard += '</div>';
// console.log(movieCard);
// moviesList.innerHTML += movieCard;

// Way #3
  var columns = document.createElement('div');
  var columnsAttr = document.createAttribute('class');
  columnsAttr.value = 'col-12 col-sm-6 col-md-4';
  columns.setAttributeNode(columnsAttr);

  var card = document.createElement('div');
  var cardAttr = document.createAttribute('class');
  cardAttr.value = 'card';
  card.setAttributeNode(cardAttr);


  var cardBody = document.createElement('div')
  var cardBodyAttr =document.createAttribute('class')
  cardBodyAttr.value = 'card-body';
  cardBody.setAttributeNode(cardBodyAttr);

  var cardTitle = document.createElement('h5')
  var cardTitleAttr =document.createAttribute('class')
  cardTitleAttr.value = 'card-title';
  var cardTitleText = document.createTextNode(movie.title);

  cardTitle.appendChild(cardTitleText);
  cardBody.appendChild(cardTitle);
  card.appendChild(cardBody);
  columns.appendChild(card);

  moviesList.appendChild(columns);











}
