$("#sectionSelect").on("change", function() {
  $(".container-category").empty();
  // $(".header").css();
  // $(".logo").css();
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
    let disImg = 0;
    for (i = 0; i < data.results.length; i++) {
      $(".container-category").hide();
      console.log(data.results[i].abstract);
      if (data.results[i].multimedia.length >= 1 && disImg < 12) {
        $(".container-category").append(`<div class=grid>
      <a href="${data.results[i].url}"><img src=${data.results[i].multimedia[4].url} class="gridImage">
      </a><p class=gridTitles>${data.results[i].abstract}</p>
      </div>`);
        disImg++;
        $(".container-category").show("slow");
      }

      console.log(data);
    }
  });
});

// Show 12 articles in the grid
// console.log(data.results[0].abstract);
//Show image in the grid
// $(".container-category").append(
//   `<img src=${data.results[i].multimedia[3].url}>`
// );
// console.log(data);
// console.log(data.results[0].abstract);
// console.log(data.results[0].url);
// console.log(data.results[0].multimedia[0].url);
