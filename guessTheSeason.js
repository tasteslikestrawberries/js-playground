//WHICH SEASON IS IT?
function guessSeason() {
    const date = new Date().toLocaleDateString("it-IT");
    let month = date.split("");
    if (month[2] !== "/") {
      month = month[2];
    } else {
      month = month[3];
    }
  
    switch (month) {
      case "1":
      case "2":
        console.log("Winter");
        break;
      case "3":
        console.log("Winter...or Spring");
        break;
      case "4":
      case "5":
      case "6":
        console.log("Spring...or Summer");
        break;
      case "7":
      case "8":
        console.log("Summer");
        break;
      case "9":
        console.log("Summer...or Autumn");
        break;
      case "10":
      case "11":
        console.log("Autumn");
        break;
      case "12":
        console.log("Winter");
        break;
    }
    return month;
  }
  
  guessSeason();
  