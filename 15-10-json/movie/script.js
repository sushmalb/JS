const movies = [
  {
    name: "Inception",
    year: 2010,
    ratings: 8.8,
    genre: "Science Fiction",
  },
  {
    name: "The Shawshank Redemption",
    year: 1994,
    ratings: 9.3,
    genre: "Drama",
  },
  {
    name: "The Godfather",
    year: 1972,
    ratings: 9.2,
    genre: "Crime",
  },
  {
    name: "Pulp Fiction",
    year: 1994,
    ratings: 8.9,
    genre: "Crime",
  },
  {
    name: "Forrest Gump",
    year: 1994,
    ratings: 8.8,
    genre: "Drama",
  },
];

console.log("The movies are: ");

for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].name);
}
console.log("====================");

console.log("The movies with rating above 9: ");
console.log("====================");
for (let i = 0; i < movies.length; i++) {
  if (movies[i].ratings >= 9) {
    console.log(movies[i].name);
  }
}
