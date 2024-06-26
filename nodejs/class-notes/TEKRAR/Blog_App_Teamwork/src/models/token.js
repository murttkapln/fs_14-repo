"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG-API Project with Mongoose
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- *
{
  "user_id": "65343222b67e9681f937f001",
  "token": "...tokenKey..."
}

/* ------------------------------------------------------- */
// Token MOdel:

const TokenSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    token: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
  },
  { collection: "tokens", timestamps: true }
);
/* ------------------------------------------------------- */
// FOR REACT PROJECT:
TokenSchema.pre("init", function (data) {
  data.id = data._id;
});

/* ------------------------------------------------------- */
module.exports = mongoose.model("Token", TokenSchema);
