const authController = {
    signup: (req, res) => {
        res.send('SignUp');
    },

    login: (req, res) => {
        res.send("LogIn");
    },

    logout: (req, res) => {
        res.send('LogOut');
    }
};

module.exports = authController;