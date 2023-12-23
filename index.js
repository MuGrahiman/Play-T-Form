// Import the main app
const app = require("./Src/app");
const dbConnect = require("./Config/db-config");

const PORT = process.env.PORT || 9999;

dbConnect()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
