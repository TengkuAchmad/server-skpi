// LIBRARY IMPORT
const { PrismaClient } = require("@prisma/client");
const { v4: uuidv4 } = require("uuid");
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");

// ORM
const prisma = new PrismaClient();

exports.getDashboard = async(req, res) => {
    try {
        const KeywordCounts     = await prisma.data_Keyword.count();
        const SKPICounts        = await prisma.data_SKPI.count();
        const SyncronziedCounts = await prisma.data_Syncronized.count();

        return res.json({ KeywordCounts, SKPICounts, SyncronziedCounts})

    } catch (error) {
        return res.status(500).json({error : "An error occured"});
    }
}