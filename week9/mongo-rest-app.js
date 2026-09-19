/*
 * MongoDB Atlas CRUD Application using Express and Mongoose
 *
 * Steps:
 * 1. Create a Node.js project
 * 2. Install express and mongoose
 * 3. Replace the MongoDB connection URL with your Atlas URL
 * 4. Run: node student-api.js
 */
const dns = require("dns");
dns.setServers(["10.0.47.254"]);

const express = require("express");
const mongoose = require("mongoose");

const server = express();
const PORT = 4000;

server.use(express.json());




// ---------------- MongoDB CONNECTION ----------------

const mongoURL =
    "mongodb+srv://USERNAME_db_user:PASSWORD@cluster0.3uwoaem.mongodb.net/CollegeDB?retryWrites=true&w=majority";

mongoose.connect(mongoURL)
    .then(() => {
        console.log("MongoDB Atlas connected successfully");
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });

// ---------------- SCHEMA & MODEL ----------------

const studentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    age: {
        type: Number,
        required: true
    },

    branch: {
        type: String,
        required: true
    },

    cgpa: {
        type: Number
    }
});

const Student = mongoose.model("Student", studentSchema);


// ---------------- CREATE ----------------

server.post("/api/students", async (req, res) => {

    try {

        const studentData = new Student({
            studentName: req.body.studentName,
            email: req.body.email,
            age: req.body.age,
            branch: req.body.branch,
            cgpa: req.body.cgpa
        });

        const result = await studentData.save();

        res.status(201).json({
            message: "Student added successfully",
            student: result
        });

    } catch (err) {

        res.status(400).json({
            message: "Unable to add student",
            error: err.message
        });
    }
});


// ---------------- READ ----------------

server.get("/api/students", async (req, res) => {

    try {

        const list = await Student.find();

        res.status(200).json(list);

    } catch (err) {

        res.status(500).json({
            message: "Unable to retrieve students",
            error: err.message
        });
    }
});


// ---------------- READ ONE STUDENT ----------------

server.get("/api/students/:id", async (req, res) => {

    try {

        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student record not found"
            });
        }

        res.status(200).json(student);

    } catch (err) {

        res.status(400).json({
            message: "Invalid student ID",
            error: err.message
        });
    }
});


// ---------------- UPDATE ----------------

server.patch("/api/students/:id", async (req, res) => {

    try {

        const modifiedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!modifiedStudent) {
            return res.status(404).json({
                message: "Student record not found"
            });
        }

        res.status(200).json({
            message: "Student details updated",
            student: modifiedStudent
        });

    } catch (err) {

        res.status(400).json({
            message: "Update operation failed",
            error: err.message
        });
    }
});


// ---------------- DELETE ----------------

server.delete("/api/students/:id", async (req, res) => {

    try {

        const removedStudent = await Student.findByIdAndDelete(
            req.params.id
        );

        if (!removedStudent) {
            return res.status(404).json({
                message: "Student record not found"
            });
        }

        res.status(200).json({
            message: "Student deleted successfully",
            student: removedStudent
        });

    } catch (err) {

        res.status(400).json({
            message: "Delete operation failed",
            error: err.message
        });
    }
});


// ---------------- START SERVER ----------------

server.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    console.log("Student CRUD API is ready");
});