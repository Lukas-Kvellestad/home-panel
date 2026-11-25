/* ====================== Imports ======================= */
/* --- Packages --- */
const express = require("express");
const app = express();

/* --- Scripts --- */

/* ============= Constants and shared state ============ */
const port = 3000;

/* ======================= App setup =========================== */
app.use(express.static("public"));
app.set("view engine", "ejs");
