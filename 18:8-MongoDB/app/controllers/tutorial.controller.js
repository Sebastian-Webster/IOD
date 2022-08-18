const db = require("../models");
const Tutorial = db.tutorials;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    
    // Create a Tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    });
    
    // Save Tutorial in the database
    tutorial
    .save(tutorial)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while creating the Tutorial."
        });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
    
    Tutorial.find(condition)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving tutorials."
        });
    });
};

exports.findAllPublished = (req, res) => {
    Tutorial.find({published: true})
    .then(data => {
        console.log(data)
        res.send(data)
    })
    .catch(error => {
        res.status(500).json({
            status: "FAILED",
            message: error.message || "Some error occured while retrieving published tutorials"
        })
    })
}

exports.findOne = (req, res) => {
    const id = req.params.id;
    
    Tutorial.find({_id: id})
    .then(data => {
        if (!data) res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
    })
    .catch(err => {
        res.status(500).send({ 
            message: "Error retrieving Tutorial with id=" + id
        });
    });
};

exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    
    const id = req.params.id;
    
    Tutorial.updateOne({_id: id}, {$set: req.body})
    .then(data => {
        if (!data) {
            res.status(404).send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
        } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Tutorial with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;
    
    Tutorial.deleteOne({_id: id})
    .then(() => {
        res.send('Successfully deleted tutorial')
    })
    .catch(error => {
        res.status(500).json({
            status: "FAILED",
            message: error.message || "An error occured while deleting the tutorial. Please try again later."
        })
    })
}

exports.deleteAll = (req, res) => {
    Tutorial.deleteMany({})
    .then((result) => {
        res.send(`Deleted all tutorials. (${result.deletedCount} tutorials)`)
    })
    .catch(error => {
        res.status(500).json({
            status: "FAILED",
            message: error.message || "Some error occured while deleting all tutorials."
        })
    })
}