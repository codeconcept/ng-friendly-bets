const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = express.Router();

// cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let bets = [
  {
    id: 1,
    title: "Maximum 3 bugs mineurs après les tests",
    description: "Je parie que Max trouvera moins de 3 bugs après les tests",
    creator: "Sam",
    dateCreation: "31/04/2018",
    price: "croissants",
    bettersYes: ["Sam", "Bob"],
    bettersNo: ["Bill", "Mus"]
  },
  {
    id: 2,
    title: "Rugby France/Angleterre",
    description:
      "Je parie que la France gagnera contre l'Angleterre pendant le tournoi des 6 nations",
    creator: "Ian",
    dateCreation: "05/05/2018",
    price: "tournée générale",
    bettersYes: ["Steph", "Ian"],
    bettersNo: ["Richard", "Bob"]
  }
];

router.get("/bets", (req, res) => {
  res.status(200).send(bets);
});

router.post("/bets", (req, res) => {
  console.log("bet ", req.body);
  bets = [...bets, req.body];
  res.send(req.body);
});

app.use("/api", router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
