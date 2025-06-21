// import { Router } from "express";
// import { registerUser } from "../controllers/user.controller.js";
// import express from "express";

// const router = express.Router();
// console.log(typeof registerUser);
// router.post("/register" || registerUser, (req, res) => {
//   res.send("Register route hit!");
//   console.log("User routes mounted at /api/v1/user");
// });

// router.post("/register", registerUser);

// // export default router;
// import express from "express";
// import { registerUser } from "../controllers/user.controller.js"; // Adjust path if needed
// import { upload } from "../middlewares/multer.model.js";

// const router = express.Router();

// // router.post(
// //   "/register",
// //   upload.fields[ //upload is nothing but a middlewere .it will inject before method.upload will take a file of imege and avatar
// //     ({
// //       name: "avatar",
// //       maxCount: 1,
// //     },
// //     {
// //       name: "Coverimage",
// //       maxCount: 1,
// //     })
// //   ],
// //   registerUser,
// // );

// // export default router;
// import express from "express";
// import {
//   registerUser,
//   loginUser,
//   logoutUser,
//   refreshAccessToken,
//   changeCurrentPassword,
//   getCurrentUser,
//   updateAccountDetails,
//   updateUserAvatar,
//   updateUserCoverImage,
//   getUserChannelProfile,
//   getWatchHistory,
// } from "../controllers/user.controller.js"; // ✅ Ensure this path is correct

// const router = express.Router();

// // 🔐 Auth-related routes
// router.post("/register", registerUser);
// router.post("/login", loginUser);
// router.post("/logout", logoutUser);
// router.post("/refresh-token", refreshAccessToken);
// router.post("/change-password", changeCurrentPassword);

// // 👤 User profile
// router.get("/me", getCurrentUser);
// router.put("/update-account", updateAccountDetails);
// router.put("/update-avatar", updateUserAvatar);
// router.put("/update-cover", updateUserCoverImage);
// router.get("/channel/:username", getUserChannelProfile);
// router.get("/watch-history", getWatchHistory);

// export default router;

// router.post(
//   "/register",
//   upload.fields([
//     { name: "avatar", maxCount: 1 },
//     { name: "coverImage", maxCount: 1 },
//   ]),
//   registerUser,
// );
//simple checking of url for postman
// import express from "express";
// const router = express.Router();

// router.post("/register", (req, res) => {
//   console.log("✅ Register route hit!");
//   res.send("✅ Register route hit!");
// });

// export default router;
import express from "express";
const router = express.Router();

router.post("/register", (req, res) => {
  console.log("✅ Register route hit!");
  res.status(200).send("✅ Register route hit!");
});

export default router;
