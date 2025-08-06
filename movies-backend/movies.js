import express from 'express';
import mysql from 'mysql2';

const router = express.Router()

//  Database Connection 
const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "mydb"
});


/*************************************************************************
 * QUERY (GET)
 *************************************************************************/
router.get("/", async (req, res) => {       // localhost:5050/books/ [GET]
    try {
        const data = await connection.promise().query(
            `SELECT *  from BOOKS`
        );
        console.log(`data[0]=${JSON.stringify(data[0])}`, data[0].length)
        if (data[0].length === 0) {
            res.status(500).json({
                message: "invalid data"
            });
        } else {
            res.status(202).json({  // res.send(data)
                books: data[0]
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
});
/*************************************************************************
 * INSERT (POST)
 *************************************************************************/
router.post("/", async (req, res) => {       // localhost:5050/books/ [POST]
    const { bname, isbn } = req.body
    try {
        const data = await connection.promise().query(
            `INSERT INTO books (bname,isbn)  VALUES (?,?);`, [bname, isbn]

        );
        console.log(`data[0]=${JSON.stringify(data[0])}`, data[0].length)
        if (data[0].length === 0) {
            res.status(500).json({
                message: "invalid data"
            });
        } else {
            res.status(202).json({  // res.send(data)
                books: data[0]
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
});

export default router;