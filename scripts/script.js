$(function () {
  console.log("ready!");

  const classCharlies = [
    "https://barrycumbie.github.io/legendary-waddle/",
    "https://codepen.io/barrycumbie/pen/GROaGBQ",
    "https://gist.github.com/barrycumbie/e2491ce65ed1b8711ce78fc897028597",
    "https://gist.github.com/barrycumbie/e2491ce65ed1b8711ce78fc897028597",
    "https://gist.github.com/barrycumbie/e2491ce65ed1b8711ce78fc897028597",
    "https://gist.github.com/barrycumbie/e2491ce65ed1b8711ce78fc897028597",
    "https://gist.github.com/barrycumbie/e2491ce65ed1b8711ce78fc897028597"

  ];

  // const classCharlies = $.parseJSON("/gameList.json")
  
  $.each(classCharlies, function (index, value) {
    index+=1
    $("#cardOutput").append(
      '  <div class="col-sm-4 col-lg-3 game-card-col" > <div class="card game-card"> <div class="card-header">Game No. ' +
        index +
        '</div> <div class="card-body">    <a href="' +
        value +
        '">' +
        value +
        "</a>  </div></div> </div>"
    );
  });
  

});
