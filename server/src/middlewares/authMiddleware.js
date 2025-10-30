export const isAuthenticated = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ error: "Not authenticated" });
  }
  next();
};

export const isNotAuthenticated = (req, res, next) => {
  if (req.user) {
    return res.status(403).json({ error: "Already authenticated" });
  }
  next();
};