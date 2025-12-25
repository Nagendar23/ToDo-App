const User = require('../models/UserModel');

// Signup
const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Please provide username, email, and password' });
        }

        const userExists = await User.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({
            username,
            email,
            password
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully', userId: user._id });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error during signup', error: err.message });
    }
};

// Signin
const signin = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Please provide email and password' });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Simple password comparison (in production, use bcrypt)
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
            message: 'Login successful',
            userId: user._id,
            username: user.username,
            email: user.email
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Error during signin', error: err.message });
    }
};

// Logout (client-side mainly, but can be used for session cleanup)
const logout = (req, res) => {
    try {
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error during logout', error: err.message });
    }
};

module.exports = { signup, signin, logout };
