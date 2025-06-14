import { asyncHandler } from "../utils/asyncHandelers.js";

const userRegister = asyncHandler(async (req, res,next) => {
  return res.status(200).json({
    message: "ok",
  });
});
export { userRegister };
