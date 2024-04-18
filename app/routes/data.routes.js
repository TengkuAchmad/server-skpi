// CONTROLLER
const datas = require("../controllers/data.controller");

// MIDDLEWARE
const { authenticateToken } = require("../middleware/middleware");

// ROUTER
const router =  require("express").Router();

router.get('/data-management', authenticateToken, datas.getDashboard);

module.exports = router;