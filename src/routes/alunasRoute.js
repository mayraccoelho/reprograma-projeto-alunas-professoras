const express = require("express")
const router = express.Router()
const controller = require("../controllers/alunasController")

router.get("/", controller.getAlunas)
router.get("/nasceuSp", controller.getSp)
router.get("/:id", controller.getById)
router.get("/:id/livros", controller.getLivros)
router.get("/:id/getAge", controller.getAge)

router.post("/", controller.post)
router.post("/:id/livros", controller.postLivros)

router.put('/:id', controller.update)

router.delete('/:id', controller.delete)

module.exports = router
