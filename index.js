import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { fecha: fecha(), listaTareas: tareasHoy });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", { fecha: fecha(), listaTareas: tareasWork });
});

app.post("/tarea", (req, res) => {
  const tarea = req.body["task"];
  tareasHoy.push(tarea);
  res.render("index.ejs", { fecha: fecha(), listaTareas: tareasHoy });
  // console.log(listaTareas);
});

app.post("/tareawork", (req, res) => {
  const tarea = req.body["task"];
  tareasWork.push(tarea);
  res.render("index.ejs", { fecha: fecha(), listaTareas: tareasWork });
  // console.log(listaTareas);
});

app.listen(port, () => {
  console.log(`Servidor levantado en http://localhost:${port}`);
});

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const tareasHoy = [];
const tareasWork = [];

function fecha() {
  const date = new Date();
  let dayNumber = date.getDate();
  let day = dias[date.getDay()];
  let month = meses[date.getMonth()];
  let year = date.getFullYear();
  let fechaActual = `${day} ${dayNumber} de ${month}, ${year}`;
  return fechaActual;
  // console.log(fechaActual);
}
