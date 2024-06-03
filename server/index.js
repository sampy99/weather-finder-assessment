const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

//midlwares
app.use(express.json());
app.use(cors());


app.get("/weatherDetails", async (req, res) => {

    const {
        location
    } = req.query;

    const locationURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=895284fb2d2c50a520ea537456963d9c`

    try {
        const locationResponse = await axios.get(locationURL);
        const locationData = locationResponse.data;
        return res.json(locationData);

    } catch (err) {
        console.error(err);
    }
});


//server listen in a port
app.listen(5000, () => {
    console.log("Server Started!");
})
