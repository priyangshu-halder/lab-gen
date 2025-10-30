import User from "../models/User.js";

export const getCurrentUser = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Not authenticated" });
    }
    res.json(req.user);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

export const logout = async (req, res) => {
  try {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ error: "Logout failed" });
      }
      res.json({ message: "Logged out successfully" });
    });
  } catch (err) {
    res.status(500).json({ error: "Logout error" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    const { userName } = req.body;
    
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { userName },
      { new: true }
    );
    
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to update profile" });
  }
};