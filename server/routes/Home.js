const express = require('express');
const router = express.Router();

router.post("/api/", (req, res) => {
    console.log(req);
    res.json({ message: "Hello from the backend, " + req.body.name });
});

module.exports = router;