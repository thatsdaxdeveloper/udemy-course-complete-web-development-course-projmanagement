import {ApiResponse} from "../utils/api-response.js";

const healthCheck = (req, res) => {
  try {
    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { status: "OK" },
          "Health check passed",
        ),
      );
  } catch (error) {
    res.status(500).json(new ApiResponse(500, null, "Health check failed"));
  }
}

export { healthCheck };