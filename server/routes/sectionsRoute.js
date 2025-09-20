const express = require('express');
const router = express.Router();
const {
    getSections,
    createSection,
    updateSection,
    deleteSection,
    getSpecificSection
} = require('../controllers/sectionsController');
const upload = require('../middlewares/upload');

router.get('/', getSections).get('/:slug', getSpecificSection)
    .post('/', upload.single('sectionImage'), createSection).put('/:id', upload.single('sectionImage'), updateSection).delete('/:slug', deleteSection)

module.exports = router;