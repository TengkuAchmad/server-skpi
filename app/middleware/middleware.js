exports.authenticateToken = (req, res, next) => {
    const jwt = require('jsonwebtoken');
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({message: "Unauthorized"});
    }

    try {
        const decoded = jwt.verify(token, 'skpiapilactelkom');

        req.user = decoded;
        
        next();

    } catch (error) {
        return res.status(401).json({message: "Unauthorized"});
    }
};