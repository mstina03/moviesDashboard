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
 * QUERY (POST) INDIVIDUAL
 *************************************************************************/
router.post("/", async (req, res) => {       // localhost:5050/users/ [POST}]
    try {
        const { uname } = req.body;
        console.log(`uname=${uname}`)

        const data = await connection.promise().query(
            `SELECT *  FROM users WHERE uname=?;`, [uname]
        );
        console.log(`data[0]=${JSON.stringify(data[0])}`)
        res.status(202).json({  // res.send(data)
            users: data[0]
        });
    } catch (err) {
        res.status(500).json({
            message: err
        });
    }
});

/*************************************************************************
 * INSERT (POST)
 *************************************************************************/
router.post("/add", async (req, res) => {
    const { uname, pword } = req.body;

    if (!uname || !pword) {
        return res.status(400).json({ message: "Missing username or password" });
    }

    try {
        const [result] = await connection.promise().query(
            "INSERT INTO users (uname, pword) VALUES (?, ?)", [uname, pword]
        );

        return res.status(201).json({
            message: "User added successfully",
            userId: result.insertId
        });
    } catch (err) {
        console.error("Database Error:", err);
        return res.status(500).json({
            message: "Internal server error",
            error: err.message
        });
    }
});



export default router;