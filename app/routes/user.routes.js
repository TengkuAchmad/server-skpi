// CONTROLLER
const users = require("../controllers/user.controller");

// MIDDLEWARE
const middleware = require("../middleware/middleware");

// ROUTER
const router =  require("express").Router();

router.post("/user-management", users.create);
router.post("/user-management/auth", users.auth);
router.get("/user-management", middleware.authenticateToken, users.findAll);
router.get("/user-management/:id", middleware.authenticateToken, users.findOne);
router.put("/user-management/:id", middleware.authenticateToken, users.update);
router.delete("/user-management",  middleware.authenticateToken, users.deleteAll);
router.delete("/user-management/:id", middleware.authenticateToken, users.deleteOne);

module.exports = router;