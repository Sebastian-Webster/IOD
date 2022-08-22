const Tutorial = require("../models/tutorial.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  // Save Tutorial in the database
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

exports.findOne = (req, res) => {
    const id = req?.params?.id
    console.log(id)

    if (!id) {
        res.status(400).json({
            message: "ID must be provided",
            idProvided: id
        })
        return
    }

    Tutorial.findById(id, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Some error occured while finding the tutorial"
            })
        } else res.send(data)
    })
}

exports.findAllPublished = (req, res) => {
    Tutorial.findPublished((err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message || "Some error occured while finding all published tutorials"
            })
        } else res.send(data)
    })
}

/*exports.update = (req, res) => {
    const id = req?.params?.id
    const body = req?.body
    if (!body) {
        res.status(400).json({
            message: 'You must send an update body.',
            bodyProvided: body
        })
        return
    }

    if (!id) {
        res.status(400).json({
            message: 'You must send an update id.',
            idProvided: id
        })
        return
    }

    if (Object.keys(body).length == 0) {
        res.status(400).json({
            message: 'You must provide update parameters in the body'
        })
    }

    Tutorial.update(id, body, (err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message || "Some error occured while updating tutorial."
            })
        } else res.send(data)
    })
}*/

exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    console.log(req.body);
  
    Tutorial.updateById(
      req.params.id,
      new Tutorial(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Tutorial with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Tutorial with id " + req.params.id
            });
          }
        } else res.send(data);
      }
    );
  };

exports.delete = (req, res) => {
    const id = req?.params?.id

    if (!id) {
        res.send(400).json({
            message: 'No ID was provided',
            idProvided: id
        })
    }

    Tutorial.deleteById(id, (err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message || "Some error occured while deleting tutorial."
            })
        } else res.send(data)
    })
}

exports.deleteAll = (req, res) => {
    Tutorial.deleteAll((err, data) => {
        console.log(data)
        if (err) {
            res.status(500).json({
                message: err.message || "Some error occured while deleting all tutorials"
            })
        } else res.send(`Deleted ${data} tutorials!`)
    })
}

exports.findAll = (req, res) => {
    Tutorial.findAll((err, data) => {
        if (err) {
            res.status(500).json({
                message: err.message || "Some error occured while finding all tutorials"
            })
        } else res.send(data)
    })
}