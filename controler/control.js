import { userModel } from "../models/models.js";







//// For Create New User or user  
export const createUser = async (req, res) => {
    try {
        const { name, category, price } = req.body;
        const user = await userModel({ name, category, price });
        user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


//// For update particuler part 
export const updateUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(
            req.params._Id,
            req.body,
            { new: true }
        );
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}


//// Delete the User from DB
export const deleteUser = async (req, res) => {
    try {
        const user = await userModel.findByIdAndDelete(req.params._Id);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

//  Get single user form DB by usin _Id 
export const getUser = async (req, res) => {
    try {
        const user = await userModel.findById(req.params._Id);
        if (!user) return res.status(404).json({ error: "Customer not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// Get all user and categary and price filter data
export const getUsers = async (req, res) => {
    try {
        const { category, price, page = 1, limit = 10 } = req.query;
        const filters = {};

        if (category) filters.category = category;

        if (price) filters.price = { $lte: parseInt(price, 10) };

        const Users = await userModel.countDocuments(filters);

        const Pages = Math.ceil(Users / limit);

        const users = await userModel.find(filters)
            .skip((page - 1) * limit)
            .limit(limit);
        res.json({
            users,
            currentPage: parseInt(page, 10),
            Pages,
            Users,
        });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Search User by name And category
export const searchUser = async (req, res) => {
    try {
        const data = await userModel.find({
            $or: [
                { name: { $regex: req.params.key, $options: "i" } },
                { category: { $regex: req.params.key, $options: "i" } },
            ],
        });
        res.send(data);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};