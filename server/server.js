const express = require('express');
const cors = require('cors');
const app = express();

const limiter = require('./rate-limiter');
app.use(limiter);
const routes = require("./routes");
app.use(routes);
app.use(cors({
    origin: '*'
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});