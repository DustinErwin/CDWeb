const rpgPic = document.querySelector("#rpg");
const mtgPic = document.querySelector("#card");
const tablePic = document.querySelector("#tabletop");
const boardPic = document.querySelector("#board");
const eventPic = document.querySelector("#events");
let picShift = setInterval(picChange, 7000);
let carousel = 1;

//Changes pics throughout page
function picChange() {
  switch (carousel) {
    case 1:
      rpgPic.style.backgroundImage =
        "url('./assets/images/rolePlaying/aliens.jpg')";
      mtgPic.style.backgroundImage =
        "url('./assets/images/magicTheGathering/Friday Night Magic.jpg')";
      tablePic.style.backgroundImage =
        "url('./assets/images/tableTop/Sisters of Battle.jpg')";
      boardPic.style.backgroundImage =
        "url('./assets/images/boardGames/smallworld.jpg')";
      carousel++;
      break;
    case 2:
      rpgPic.style.backgroundImage =
        "url('./assets/images/rolePlaying/pathFinder.jpg')";
      mtgPic.style.backgroundImage =
        "url('./assets/images/magicTheGathering/Friday Night Magic.jpg')";
      tablePic.style.backgroundImage =
        "url('./assets/images/tableTop/Bolt Action America.jpg')";
      boardPic.style.backgroundImage =
        "url('./assets/images/boardGames/scythe.jpg')";
      carousel++;
      break;
    case 3:
      rpgPic.style.backgroundImage =
        "url('./assets/images/rolePlaying/theWitchBeyondTheWitchlight.jpg')";
      mtgPic.style.backgroundImage =
        "url('./assets/images/magicTheGathering/Friday Night Magic.jpg')";
      tablePic.style.backgroundImage =
        "url('./assets/images/tableTop/Sigmar Sauron.jpg')";
      boardPic.style.backgroundImage =
        "url('./assets/images/boardGames/catan.jpg')";
      carousel = 1;
      break;
  }
}
