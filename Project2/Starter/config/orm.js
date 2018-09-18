var connection = require("./connection.js")

var orm = {
    all: function (tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", function (error, result) {
            if (error) throw error
            console.log(result)
            cb(result)
        })
    },

module.exports = orm;