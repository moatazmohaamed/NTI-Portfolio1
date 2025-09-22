const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const projectsRoute = require("./routes/projectsRoute");
const sectionsRoute = require("./routes/sectionsRoute");
const teamRoute = require("./routes/teamRoute");
const testimonialsRoute = require("./routes/testimonialsRoute");
const contactFormRoute = require("./routes/contactFormRoute");
const categoryRoute = require("./routes/categoryRoute");
const servicesRoute = require("./routes/servicesRoute");


app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api/projects", projectsRoute);
app.use("/api/sections", sectionsRoute);
app.use("/api/team-members", teamRoute);
app.use("/api/testimonials", testimonialsRoute);
app.use("/api/contact", contactFormRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/services", servicesRoute);

module.exports = app;