$(function () {
  console.log("ready!");

  const classCharlies = [
    "https://barrycumbie.github.io/legendary-waddle/",
    "https://codepen.io/barrycumbie/pen/GROaGBQ",
    "https://gist.github.com/barrycumbie/e2491ce65ed1b8711ce78fc897028597"
  ];
  
  
  $.each(classCharlies, function (index, value) {
    $("#cardOutput").append(
      '  <div class="card game-card"> <div class="card-header">Game No. ' +
        index +
        '</div> <div class="card-body">    <a href="' +
        value +
        '">' +
        value +
        "</a>  </div></div> "
    );

  var fs = require('fs');
  var text = fs.readFileSync("./repositoryList.txt", 'utf-8');
  var repositoryList = text.split('\n')
  var reposLength = repositoryList.length;
  // Code to read text file into gameList array
  var fileS = require('fs');
  var stringAll = fileS.readFileSync("./gameList.txt", 'utf-8');
  var gameList = stringAll.split('\n')
  var gameLength = gameList.length;

  // Game output from gameList.txt
  $.each(repositoryList, function (index, value) {
      $("#RepositoryOutput").append(
         '<a class="dropdown-item" href="https://github.com/' + value + '">' + value + '</a>'
      //  `<a class="dropdown-item" href="https://github.com/` ${ value } `"> ` value + '</a>'
      );
  }
  $.each(gameList, function (index, value) {
      $("#gameOutput").append(
        '<a class="dropdown-item" href="https://github.com/' + value + '">'+ value + '</a>'
      );
  }
  // need functions to make row or column per x amount of cards

});
