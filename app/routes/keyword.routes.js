// CONTROLLER
const keyword = require("../controllers/keyword.controller");

// MIDDLEWARE
const { authenticateToken } = require("../middleware/middleware");

// ROUTER
const router =  require("express").Router();

router.post("/keyword-management", authenticateToken, keyword.create);
router.get("/keyword-management/find", authenticateToken, keyword.findOne);
router.get("/keyword-management", authenticateToken, keyword.findAll);
router.put("/keyword-management/:id", authenticateToken, keyword.update);
router.delete("/keyword-management", authenticateToken, keyword.deleteAll);
router.delete("/keyword-management/:id", authenticateToken, keyword.deleteOne);


module.exports = router