const express = require("express")
const router = express.Router()
const userDetails = require('../user_details.json');
router.use(express.json())
router.use(express.urlencoded({ extended: true }));
router.post("/", (req, res) => {
    try {
        const { username, password } = req.body;
        if (username && password) {
            for (let i = 0; i < userDetails.length; i++) {
                if (userDetails[i].username === username && userDetails[i].password === password) {

                    res.send("User verified");

                } else if (userDetails[i].username === username && userDetails[i].password !== password) {
                    res.send("Invalid credentials");
                }
            }
            res.send("User not found");
        }
        res.send("Username and Password is required");
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router