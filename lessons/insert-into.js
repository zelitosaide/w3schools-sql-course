import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connection = mysql.createConnection({
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export function insertInto() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `INSERT INTO customers (name, address) VALUES ("Company Inc", "Highway 37")`;
    connection.query(sql, function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}

export function insertIntoMany() {
  connection.connect(function (error) {
    if (error) throw error;
    const sql = `INSERT INTO customers (name, address) VALUES ?`;
    const values = [
      ["John", "Highway 71"],
      ["Peter", "Lowstreet 4"],
      ["Amy", "Apple st 652"],
      ["Hannah", "Mountain 21"],
      ["Michael", "Valley 345"],
      ["Sandy", "Ocean blvd 2"],
      ["Betty", "Green Grass 1"],
      ["Richard", "Sky st 331"],
      ["Susan", "One way 98"],
      ["Vicky", "Yellow Garden 2"],
      ["Ben", "Park Lane 38"],
      ["William", "Central st 954"],
      ["Chuck", "Main Road 989"],
      ["Viola", "Sideway 1633"],
    ];
    connection.query(sql, [values], function (error, result) {
      if (error) throw error;
      console.log(result);
    });
  });
}
