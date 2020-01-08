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
      console.log(data.results[i].abstract);
    }
  });
});
// console.log(data);
// console.log(data.results[0].abstract);
// console.log(data.results[0].url);
// console.log(data.results[0].multimedia[0].url);
