$(function () {
  console.log("ready!");
  const classCharlies = [
    "https://barrycumbie.github.io/legendary-waddle/",
    "https://codepen.io/barrycumbie/pen/GROaGBQ",
    "https://gist.github.com/barrycumbie/e2491ce65ed1b8711ce78fc897028597"
  ];

  $.each(classCharlies, function (index, value) {
    $("body").append(
    $("#cardOutput").append(
      '  <div class="card game-card"> <div class="card-header">Game No. ' +
        index +
        '</div> <div class="card-body">    <a href="' +
        value +
        '">' +
        value +
        "</a>  </div></div> "
    );
  });
  
  // need functions to make row or column per x amount of cards
});
