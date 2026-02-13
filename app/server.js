const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => res.status(200).send("OK"));

app.get("/api/items", async (req, res) => {
  const delay = 50 + Math.floor(Math.random() * 150);
  await new Promise(r => setTimeout(r, delay));

  res.json({
    items: [
      { id: 1, name: "apple" },
      { id: 2, name: "banana" },
      { id: 3, name: "orange" }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
