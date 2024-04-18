// CONTROLLER
const datas = require("../controllers/data.controller");

// MIDDLEWARE
const middleware = require("../middleware/middleware");

// ROUTER
const router =  require("express").Router();

router.get('/data', middleware.authenticateToken, datas.getDashboard);

module.exports = router;