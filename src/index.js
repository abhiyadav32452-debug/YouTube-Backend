// Environment variables are loaded in src/app.js before any usage.
import connectDB from "./db/index.js";
import app from "./app.js";

console.log(process.env.PORT);

connectDB()
.then(() => {

    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
        console.log(
            `Server is running at port: ${process.env.PORT || 8000}`
        );
    });

})
.catch((err) => {
    console.log("MongoDB connection failed:", err);
});