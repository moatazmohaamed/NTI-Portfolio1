const Section = require('../models/sections.model');

const getSections = async (req, res) => {
    try {
        const [sections, sectionsCount] = await Promise.all([Section.find().lean(), Section.estimatedDocumentCount()])
        res.status(200).json({
            success: true,
            results: sectionsCount,
            data: sections
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const getSpecificSection = async (req, res) => {
    try {
        const {
            slug
        } = req.params
        const section = await Section.findOne({
            slug
        });
        if (!section) return res.status(404).json({
            message: "Section not found"
        });
        res.status(200).json({
            success: true,
            results: 1,
            data: section
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const createSection = async (req, res) => {
    try {
        const image = req.file.filename;
        const {
            ...sectionData
        } = req.body;
        if (image) sectionData.image = image
        const newSection = await Section.create(sectionData);
        res.status(201).json({
            success: true,
            results: 1,
            message: "Section created successfully",
            data: newSection
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const updateSection = async (req, res) => {
    try {
        const image = req.file ? req.file.filename : null
        const updated = req.body;
        if (image) updated.image = image

        const updatedSection = await Section.findOneAndUpdate(req.params.slug,
            updated, {
                new: true,
                runValidators: true
            }
        );

        if (!updatedSection) return res.status(404).json({
            message: "Section not found"
        });

        res.status(200).json({
            success: true,
            results: 1,
            message: "Section updated successfully",
            data: updatedSection
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
}

const deleteSection = async (req, res) => {
    try {
        const deletedSection = await Section.findOneAndDelete({
            slug: req.params.slug
        });
        if (!deletedSection) return res.status(404).json({
            message: "Section not found"
        });
        res.status(200).json({
            success: true,
            message: `Section with title: ${deletedSection.title} deleted successfully`
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}


module.exports = {
    getSections,
    getSpecificSection,
    createSection,
    deleteSection,
    updateSection
}