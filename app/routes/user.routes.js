// CONTROLLER
const users = require("../controllers/user.controller");

// MIDDLEWARE
const { authenticateToken } = require("../middleware/middleware");

// ROUTER
const router =  require("express").Router();

router.post("/user-management", users.create);
router.post("/user-management/auth", users.auth);
router.get("/user-management", authenticateToken, users.findAll);
router.get("/user-management/:id", authenticateToken, users.findOne);
router.put("/user-management/:id", authenticateToken, users.update);
router.delete("/user-management",  authenticateToken, users.deleteAll);
router.delete("/user-management/:id", authenticateToken, users.deleteOne);

module.exports = router;