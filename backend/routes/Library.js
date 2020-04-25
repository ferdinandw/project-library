const express = require('express')
const router = express.Router()

const LibraryController = require('./../controllers/Library')

router.post('/post', LibraryController.create)
router.get('/get', LibraryController.getData)
router.get('/get/:libraryId', LibraryController.getDataById)
router.delete('/delete/:libraryId', LibraryController.deleteById)
router.put('/edit/:libraryId', LibraryController.editDataById)

module.exports = router