/**
 * Created by MaiaVinicius on 25/07/17.
 */
var connection = require("./../connection");

module.exports.getAll = function (cb) {
    connection.query("select * from users", function (err, result) {

        cb(result);
    });
};

module.exports.new = function (data) {
    connection.query("INSERT INTO users (name,username,email,password,college_id)" +
        "VALUES (?,?,?,?,?)", [data.name, data.username, data.email, data.password, data.college_id], function (err, result) {
        console.log(err)
    });
};