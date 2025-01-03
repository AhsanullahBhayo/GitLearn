import User from "../model/userModel.js";

export const addAward = async (req, res) => {
  try {
    const userData = new User(req.body);
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    const saveData = await userData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const getAward = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({ msg: "User data not found" });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateAward = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(401).json({ msg: "User data not found" });
    }

    const updatedAward = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "User Updated Successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteAward = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ msg: "User data not found" });
    }

    await User.findByIdAndDelete(id);
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
