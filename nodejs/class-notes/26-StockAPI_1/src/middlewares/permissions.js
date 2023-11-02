"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
// Middleware: permissions

module.exports = {
  isLogin: (req, res, next) => {
    if (req.user && req.user.is_active) {
      next();
    } else {
      throw new Error("NoPermission: You must login.");
    }
  },

  isAdmin: (req, res, next) => {
    if (req.user && req.user.is_active && req.user.is_superadmin) {
      next();
    } else {
      throw new Error("NoPermission: You must login and  to be Admin.");
    }
  },
  isStaff: (req, res, next) => {
    if (
      req.user &&
      req.user.is_active &&
      (req.user.is_superadmin || req.user.is_staff)
    ) {
      next();
    } else {
      throw new Error("NoPermission: You must login and  to be Staff.");
    }
  },
};
