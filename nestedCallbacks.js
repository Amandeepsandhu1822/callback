const request = require('request');
request(`https://maciejtreder.github.io/asynchronous-javascript/directors`, {json: true}, (err, res, directors) => {
  let firstId = directors.find(director => director.name === "James Cameron").id;
  request(`https://maciejtreder.github.io/asynchronous-javascript/directors/${firstId}/movies`, {json: true}, (err, res, movies) => {
      let checkedMoviesCount = 0;
      movies.forEach(movie => {
          request(`https://maciejtreder.github.io./asynchronous-javascript/movies/${movie.id}/reviews`, {json: true}, (err, res, reviews) => {
              checkedMoviesCount++;
              aggregatedScore = 0;
              count = 0;
              reviews.forEach(review => {
                  aggregatedScore += review.rating;
                  count++;
              });
              movie.averageRating = aggregatedScore / count;
              if (checkedMoviesCount === movies.length) {
                  movies.sort((m1, m2) => m2.averageRating - m1.averageRating);
                  console.log(`The best movie by James Cameron is... ${movies[0].title} !!!`);
              }
           });
      });
  });
});