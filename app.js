import express from "express";
import { contaPost } from "./functions.js";
//** BONUS **//
import fs from "fs";
// Creo l'applicazione web tramite express
const app = express();
// Definisco la porta
const port = 3000;

// Rendo pubblici i contenuti
app.use(express.static("public"));

app.get("/", (req, res) => {
  const resData = {
    data: "Benvenuto nel mio blog, qui parliamo solo ed esclusivamente di Calcio!",
  };

  res.json(resData);
});

const posts = [
  {
    titolo: "La leggenda del Real Madrid",
    contenuto: "Il Real Madrid continua a dimostrare la sua supremazia in Europa con una rosa sempre più competitiva. Analizziamo le ultime partite e i talenti emergenti.",
    immagine: "./img/real-madrid.jpg",
    tags: ["calcio", "Real Madrid", "Champions League"],
  },
  {
    titolo: "Barcellona: giovani talenti in crescita",
    contenuto: "La Masia sforna nuovi talenti e il Barcellona punta forte sui giovani. Scopriamo chi sono i futuri campioni blaugrana.",
    immagine: "./img/barcellona.jpg",
    tags: ["calcio", "Barcellona", "LaLiga"],
  },
  {
    titolo: "Milan tra passato e futuro",
    contenuto: "Dalla gloriosa storia alle sfide moderne, il Milan cerca un nuovo equilibrio tra esperienza e innovazione tattica.",
    immagine: "./img/milan.jpg",
    tags: ["calcio", "Milan", "Serie A"],
  },
  {
    titolo: "Manchester United: rinascita o crisi?",
    contenuto: "Analisi approfondita sulla stagione dei Red Devils: tra infortuni, mercato e scelte discutibili, cosa ci aspetta nel futuro?",
    immagine: "img/manchester-united.jpg",
    tags: ["calcio", "Manchester United", "Premier League"],
  },
  {
    titolo: "Paris-Saint-Germain: il sogno Champions continua",
    contenuto: "Nonostante le difficoltà, il PSG continua la corsa verso la Champions League. Dembele e compagni sono pronti a stupire?",
    immagine: "./img/psg.jpg",
    tags: ["calcio", "PSG", "Ligue 1"],
  },
];

const numeroPost = contaPost(posts);

app.get("/bacheca", (req, res) => {
  res.json({
    posts: posts,
    conteggio: numeroPost,
  });
});

//** BONUS **//
app.get("/bacheca2", (req, res) => {
  const dataJSON = fs.readFileSync("./data/bonus.json"); // Stringa JSON codificata
  const posts = JSON.parse(dataJSON);
    res.json({
    posts: posts,
    conteggio: numeroPost,
  });
})

// Invoco la funzione di ascolto
app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
