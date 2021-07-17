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
        "url('./assets/images/magicTheGathering/Friday_Night_Magic.JPG')";
      tablePic.style.backgroundImage =
        "url('./assets/images/tableTop/Sisters_of_Battle.JPG')";
      boardPic.style.backgroundImage =
        "url('./assets/images/boardGames/smallworld.jpg')";
      carousel++;
      break;
    case 2:
      rpgPic.style.backgroundImage =
        "url('./assets/images/rolePlaying/pathFinder.jpg')";
      mtgPic.style.backgroundImage =
        "url('./assets/images/magicTheGathering/Friday_Night_Magic.JPG')";
      tablePic.style.backgroundImage =
        "url('./assets/images/tableTop/Bolt_Action_America.JPG')";
      boardPic.style.backgroundImage =
        "url('./assets/images/boardGames/scythe.jpg')";
      carousel++;
      break;
    case 3:
      rpgPic.style.backgroundImage =
        "url('./assets/images/rolePlaying/theWitchBeyondTheWitchlight.jpg')";
      mtgPic.style.backgroundImage =
        "url('./assets/images/magicTheGathering/Friday_Night_Magic.JPG')";
      tablePic.style.backgroundImage =
        "url('./assets/images/tableTop/Sigmar_Sauron.jpg')";
      boardPic.style.backgroundImage =
        "url('./assets/images/boardGames/catan.jpg')";
      carousel = 1;
      break;
  }
}
