const { Router } = require("express");
const router = Router();

router.use(require('./chicken'));
router.use(require('./eggs'));
router.use(require('./home'));

module.exports = router;
