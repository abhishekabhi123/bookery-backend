const express = require("express");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;
const authRoute = require("./routes/authRoute");
const productRoute = require("./routes/productRoute");
const blogRoute = require("./routes/blogRoute");
const genreRoute = require("./routes/productGenreRoute");
const blogGenreRoute = require("./routes/blogGenreRoute");
const publisherRoute = require("./routes/publisherRoute");
const enqRoute = require("./routes/enqRoute");
const couponRoute = require("./routes/couponRoute");

const cookieParser = require("cookie-parser");
const morgan = require("morgan");

dbConnect();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/user", authRoute);
app.use("/api/product", productRoute);
app.use("/api/blog", blogRoute);
app.use("/api/genre", genreRoute);
app.use("/api/blog-genre", blogGenreRoute);
app.use("/api/publisher", publisherRoute);
app.use("/api/coupon", couponRoute);
app.use("/api/enquiry", enqRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
