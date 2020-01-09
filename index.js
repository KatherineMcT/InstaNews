$("#sectionSelect").on("change", function() {
  let selectedVal = $("#sectionSelect :selected").val();
  let sectionURL = `https://api.nytimes.com/svc/topstories/v2/${selectedVal}.json`;
  console.log(sectionURL);

  $.ajax({
    method: "GET",
    url: sectionURL,
    data: {
      "api-key": "GppNAXaGs8XSib9sBWqR2wdgv7kFgqKi"
    }
  }).done(function(data) {
    // let disImg = 0;
    for (i = 0; i < 12; i++) {
      //if(data.results[i].multimedia.length >=1){}
      console.log(data.results[i].abstract);

      $(".container-category").append(`<div>
      <a href="${data.results[i].url}"><img src=${data.results[i].multimedia[3].url}>
      </a><p>${data.results[i].abstract}</p>
      </div>`);

      console.log(data);
    }
  });
});
// Show 12 articles in the grid
// $(".container-category").append<p>${data.results[i].abstract}</p>
//Redirect to Url
//Show image in the grid
// $(".container-category").append(
//   `<img src=${data.results[i].multimedia[3].url}>`
// );
// console.log(data);
// console.log(data.results[0].abstract);
// console.log(data.results[0].url);
// console.log(data.results[0].multimedia[0].url);
