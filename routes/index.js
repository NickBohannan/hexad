const express = require("express")
const router = express.Router()
const fs = require('fs')

router.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

router.post("/messagebox", (req, res) => {
    if (
        req.body.message.toLowerCase().includes("should") &&
        req.body.message.toLowerCase().includes("death") &&
        req.body.message.toLowerCase().includes("bride") &&
        req.body.message.toLowerCase().includes("amid") &&
        req.body.message.toLowerCase().includes("breakers") &&
        req.body.message.toLowerCase().includes("stand")
    ) {
        res.sendFile("firststep.html", { root: './public/' });
    } else if (
        req.body.message.toLowerCase().includes("first") &&
        req.body.message.toLowerCase().includes("temple") &&
        req.body.message.toLowerCase().includes("hexad") &&
        req.body.message.toLowerCase().includes("coalescence")
    ) {
        res.sendFile("secondstep.html", { root: './public' })

    } else {
        res.send("nope, try again.")
    }
})

module.exports = router