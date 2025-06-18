// import { Router } from "express";
// import { userregister } from "../controllers/user.controller.js";
// import express from "express";

// const router = express.Router();
// console.log(typeof userregister);

// router.post("/register", userregister);

// export default router;
import express from "express";
import { userregister } from "../controllers/user.controller.js"; // Adjust path if needed
import { upload, Upload } from "../middlewares/multer.model.js";

const router = express.Router();

router.post(
  "/register",
  upload.fields[ //upload is nothing but a middlewere .it will inject before method.upload will take a file of imege and avatar
    ({
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "Coverimage",
      maxCount: 1,
    })
  ],
  userregister,
);

export default router;
