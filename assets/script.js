const rpgLoadedImage = document.querySelector("#rpg");
const mtgLoadedImage = document.querySelector("#card");
const tableLoadedImage = document.querySelector("#tabletop");
const boardLoadedImage = document.querySelector("#board");
const eventLoadedImage = document.querySelector("#events");

//Card Images
const images = {
  //Role Playing Games
  rpg: [
    "url('./assets/images/rolePlaying/aliens.jpg')",
    "url('./assets/images/rolePlaying/pathFinder.jpg')",
    "url('./assets/images/rolePlaying/theWitchBeyondTheWitchlight.jpg')",
  ],
  //Magic the Gathering
  mtg: [
    "url('./assets/images/magicTheGathering/Friday_Night_Magic.JPG')",
    "url('./assets/images/magicTheGathering/Friday_Night_Magic.JPG')",
    "url('./assets/images/magicTheGathering/Friday_Night_Magic.JPG')",
  ],
  //Table Top games
  table: [
    "url('./assets/images/tableTop/Sisters_of_Battle.JPG')",
    "url('./assets/images/tableTop/Bolt_Action_America.JPG')",
    "url('./assets/images/tableTop/Sigmar_Sauron.jpg')",
  ],
  //Board Games
  board: [
    "url('./assets/images/boardGames/smallworld.jpg')",
    "url('./assets/images/boardGames/scythe.jpg')",
    "url('./assets/images/tableTop/Sigmar_Sauron.jpg')",
  ],
};
//Timer for image change in the cards
let picShift = setInterval(loadImages, 7000);
let carousel = 1;

//Changes pics throughout page
function loadImages() {
  switch (carousel) {
    case 1:
      rpgLoadedImage.style.backgroundImage = images.rpg[carousel - 1];
      mtgLoadedImage.style.backgroundImage = images.mtg[carousel - 1];
      tableLoadedImage.style.backgroundImage = images.table[carousel - 1];
      boardLoadedImage.style.backgroundImage = images.board[carousel - 1];
      carousel++;
      break;
    case 2:
      rpgLoadedImage.style.backgroundImage = images.rpg[carousel - 1];
      mtgLoadedImage.style.backgroundImage = images.mtg[carousel - 1];
      tableLoadedImage.style.backgroundImage = images.table[carousel - 1];
      boardLoadedImage.style.backgroundImage = images.board[carousel - 1];
      carousel++;
      break;
    case 3:
      rpgLoadedImage.style.backgroundImage = images.rpg[carousel - 1];
      mtgLoadedImage.style.backgroundImage = images.mtg[carousel - 1];
      tableLoadedImage.style.backgroundImage = images.table[carousel - 1];
      boardLoadedImage.style.backgroundImage = images.board[carousel - 1];
      carousel = 1;
      break;
  }
}
