var express = require("express");
const burger = require("../models/burger.js");

var router = express.Router();

router.get("/", (req, res) => {

    burger.selectAll(data => {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devour], result => {
        res.json({id: result.insertId});
    });
});

router.put("/api/burger/:id", (req, res) => {
    var burgerId = req.params.id;
  
    burger.updateOne({devoured: req.body.devoured}, burgerId, result => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        
      } else {
        res.status(200).end();
      }
    });
  });

module.exports = router;