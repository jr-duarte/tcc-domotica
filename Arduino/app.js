const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
 const arled = new Led(3);
 const tv1 = new Led(4);
 const tv2 = new Led(5);
 const tv3 = new Led(6);
 const tv4 = new Led(7);
 const sala1 = new Led(8);
 const sala2 = new Led(9);
 const lareira = new Led(11);


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
    lareira
  });

});
