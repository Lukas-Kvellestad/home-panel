/* ====================== Imports ======================= */
/* --- Packages --- */
const express = require("express");
const app = express();

/* --- Scripts --- */

/* ============= Constants and shared state ============ */
const PORT = 3000;

/* ======================= App setup =========================== */
app.use(express.static("public"));
app.set("view engine", "ejs");

/* ====================== Imports ======================= */

/* ========================== Routes ============================ */

/* --- Pages --- */
app.get("/", (req, res) => {
  res.render("index");
});

/* ========================== Start ================================ */

app.listen(PORT, () => {
  console.log(`Panel running on http://localhost:${PORT}`);
});
