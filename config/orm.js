var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
    
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
  // Object for all our SQL statement functions.
  var orm = {
    selectAll: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function(table, cols, vals, cb) {
      // var queryString = "INSERT INTO " + table;
  
      // queryString += " (";
      // queryString += cols.toString();
      // queryString += ") ";
      // queryString += "VALUES (";
      // queryString += printQuestionMarks(vals.length);
      // queryString += ") ";
  
      // console.log(queryString);
  
      connection.query("INSERT INTO ?? (??) VALUES (?) ", [table, cols, vals], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: Veggie Burger, devoured: true}
    updateOne: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
  
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
  
      console.log(queryString);
      connection.query(queryString , function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    remove: function(table, col, val, cb) {
      connection.query("DELETE FROM ?? WHERE ?? = ?", [table, col, val], function(err, data) {
        if(err)
          throw err;
        
        console.log(data);
  
        return cb(data);
      });
    }
  };

module.exports = orm;