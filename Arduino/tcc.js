const five = require("johnny-five");
const firebase = require("firebase");
const { Board, Led, Servo } = require("johnny-five");
const board = new five.Board({ port: "COM5" });

board.on("ready", function () {
  const arled = new Led(2);
  const ar = new Led(12);
  const tv1 = new Led(4);
  const tv2 = new Led(5);
  const tv3 = new Led(6);
  const tv4 = new Led(7);
  const sala1 = new Led(8);
  const sala2 = new Led(9);
  const lareira = new Led(11);
  const garagem = new Servo(3);
  garagem.to(103);

  var config = {
    apiKey: "#####",
    authDomain: "#####",
    databaseURL: "#######",
    projectId: "#######",
    storageBucket: "#####",
    messagingSenderId: "#####",
    appId: "######",
  };
  firebase.initializeApp(config);

  let arCondicionado = firebase
    .database()
    .ref("houses/-LoEASEb-mzHsZbeU6FB/arCondicionado");
  let TvLCD = firebase.database().ref("houses/-LoEASEb-mzHsZbeU6FB/TvLCD");
  let lampadaSala1 = firebase
    .database()
    .ref("houses/-LoEASEb-mzHsZbeU6FB/lampadaSala1");
  let lampadaSala2 = firebase
    .database()
    .ref("houses/-LoEASEb-mzHsZbeU6FB/lampadaSala2");
  let lareiraDB = firebase
    .database()
    .ref("houses/-LoEASEb-mzHsZbeU6FB/lareira");
  let portaoGaragem = firebase
    .database()
    .ref("houses/-LoEASEb-mzHsZbeU6FB/portaoGaragem");
  let valueDB = "";

  //var temperatura = firebase.database().ref('houses/-LoEASEb-mzHsZbeU6FB/temperatura');

  function timer(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  async function descer() {
    // We need to wrap the loop into an async function for this to work
    for (var i = 0; i < 103; i++) {
      garagem.to(i);
      await timer(35); // then the created Promise can be awaited
    }
  }
  function subir(i) {
    garagem.to(i);
    if (--i > -1) {
      setTimeout(function () {
        subir(i);
      }, 33);
    }
  }

  portaoGaragem.on("value", function (snapshot) {
    this.valueDB = snapshot.val();
    if (this.valueDB == "Ligado") {
      //subir(103)
      garagem.to(0);
    } else if (this.valueDB == "Desligado") {
      //descer()
      garagem.to(103);
    }
    this.valueDB = "";
  });

  arCondicionado.on("value", function (snapshot) {
    this.valueDB = snapshot.val();
    if (this.valueDB == "Ligado") {
      arled.on();
      ar.off();
    } else if (this.valueDB == "Desligado") {
      arled.off();
      ar.on();
    }
    this.valueDB = "";
  });

  TvLCD.on("value", function (snapshot) {
    this.valueDB = snapshot.val();
    if (this.valueDB == "Ligado") {
      tv1.on();
      tv2.on();
      tv3.on();
      tv4.on();
    } else if (this.valueDB == "Desligado") {
      tv1.off();
      tv2.off();
      tv3.off();
      tv4.off();
    }
    this.valueDB = "";
  });

  lampadaSala1.on("value", function (snapshot) {
    this.valueDB = snapshot.val();
    if (this.valueDB == "Ligado") {
      sala1.on();
    } else if (this.valueDB == "Desligado") {
      sala1.off();
    }
    this.valueDB = "";
  });

  lampadaSala2.on("value", function (snapshot) {
    this.valueDB = snapshot.val();
    if (this.valueDB == "Ligado") {
      sala2.on();
    } else if (this.valueDB == "Desligado") {
      sala2.off();
    }
    this.valueDB = "";
  });

  lareiraDB.on("value", function (snapshot) {
    this.valueDB = snapshot.val();
    if (this.valueDB == "Ligado") {
      lareira.on();
    } else if (this.valueDB == "Desligado") {
      lareira.off();
    }
    this.valueDB = "";
  });

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  board.repl.inject({
    arled,
    tv1,
    tv2,
    tv3,
    tv4,
    sala1,
    sala2,
    lareira,
    garagem,
  });
});
