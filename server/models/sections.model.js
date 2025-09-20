const mongoose = require('mongoose');
const slugify = require('slugify');

const sectionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Section title is required"],
        trim: true,
        minlength: [3, "Title must be at least 3 characters"],
        maxlength: [100, "Title cannot exceed 100 characters"],
    },
    slug: {
        type: String,
        lowercase: true,
        trim: true,
    },
    content: {
        type: String,
        required: [true, "Section content is required"],
        trim: true,
    },
    summary: {
        type: String,
        trim: true,
    },
    image: {
        type: String,
        required: [true, "Project image is required"]
    },
    order: {
        type: Number,
        default: 0,
    },
    isActive: {
        type: Boolean,
        default: true,
    },

}, {
    timestamps: true,
    versionKey: false
})

sectionSchema.pre("save", function (next) {
    this.slug = this.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    next();
});

sectionSchema.pre("findOneAndUpdate", function (next) {
    const update = this.getUpdate();
    if (update.title) {
        update.slug = update.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");
        this.setUpdate(update);
    }
    next();
});

const Section = mongoose.model('Section', sectionSchema);
module.exports = Section;