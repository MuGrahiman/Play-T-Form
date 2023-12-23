const mongoose = require("mongoose");

const URI = process.env.CONNECTION_URL;
const dbConnect= () =>
    new Promise((resolve, reject) =>
      mongoose
        .connect(URI, 
            // { useNewUrlParser: true, useUnifiedTopology: true }
            )
        .then((res) => resolve("Database Connected Successfully"))
        .catch((err) => reject(err))
    );

module.exports = dbConnect;
