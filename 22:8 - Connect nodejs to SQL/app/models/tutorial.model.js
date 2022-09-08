const sql = require("./db.js");

// constructor
const Tutorial = function(tutorial) {
  this.title = tutorial.title;
  this.description = tutorial.description;
  this.published = tutorial.published;
};

Tutorial.create = (newTutorial, result) => {
  sql.query("INSERT INTO tutorials SET ?", newTutorial, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created tutorial: ", { id: res.insertId, ...newTutorial });
    result(null, { id: res.insertId, ...newTutorial });
  });
};

Tutorial.findById = (id, result) => {
  sql.query(`SELECT * FROM tutorials WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorial: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Tutorial.findPublished = (result) => {
  sql.query(`SELECT * FROM tutorials WHERE published = true`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found published tutorials: ", res);
      result(null, res);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

Tutorial.findAll = (result) => {
  sql.query(`SELECT * FROM tutorials`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found tutorials: ",);
      result(null, res);
      return;
    }

    // not found Tutorial with the id
    result({ kind: "not_found" }, null);
  });
};

/*Tutorial.update = (id, update, result) => {
  let queryString = ''
  let iterations = 0;
  const objectEntries = Object.entries(update);
  for (const [key,value] of objectEntries) {
    const typeofValue = typeof value
    queryString += key
    queryString += '='
    if (typeofValue === 'string') {
      queryString += '"'
      queryString += value
      queryString += '"'
    } else if (typeofValue === 'boolean') {
      queryString += value
    } else {
      result((typeofValue + 'is not a supported value type yet for update body yet.'), null)
      return
    }
    if (objectEntries.length - 1 != iterations) {
      queryString += ', '
    }
    console.log(key + ' : ' + value)
    iterations += 1
  }

  sql.query(`UPDATE tutorials SET ${queryString} WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    result(null, 'Tutorial has been updated!')
  });
};*/

Tutorial.updateById = (id, tutorial, result) => {
  sql.query(
    "UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?",
    [tutorial.title, tutorial.description, tutorial.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Tutorial with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated tutorial: ", { id: id, ...tutorial });
      result(null, { id: id, ...tutorial });
    }
  );
};

Tutorial.deleteById = (id, result) => {
  sql.query(`DELETE FROM tutorials WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: " + err)
      result(err, null)
      return
    }

    result(null, 'Tutorial has been deleted!')
  })
}

Tutorial.deleteAll = (result) => {
  sql.query(`DELETE FROM tutorials`, (err, res) => {
    if (err) {
      console.log("error: " + err)
      result(err, null)
      return
    }
    result(null, res.affectedRows)
  })
}

module.exports = Tutorial