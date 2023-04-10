const express = require('express')
const router = express.Router()

// Body Parser
router.use(express.urlencoded({ extended: true }))

// Controllers
const BuffetCntrl = require('../controllers/buffets')

router.use(express.json())

// Require isLoggedIn
const isLoggedIn = require("../helper/isLoggedIn");

// Routes
router.get("/buffet/add", BuffetCntrl.buffet_create_get);
router.post("/buffet/add", BuffetCntrl.buffet_create_post);

router.get("/buffet/index", BuffetCntrl.buffet_index_get);
router.get("/buffet/detail", BuffetCntrl.buffet_show_get);

router.get("/buffet/edit", BuffetCntrl.buffet_edit_get);
router.put("/buffet/update", BuffetCntrl.buffet_update_put);

router.delete("/buffet/delete", BuffetCntrl.buffet_delete_get);

module.exports = router;