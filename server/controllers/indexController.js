exports.order_POST = async (req, res, next) => {
    // try {
    //     const { email, password } = req.body;
    //     if (!(email && password)) {
    //         res.status(400).json({ error: 'All input is required' });
    //     }
    //     const user = await User.findOne({ email });
    //     if (user && (await bcrypt.compare(password, user.password))) {
    //         const token = jwt.sign(
    //             { user_id: user._id, email },
    //             process.env.JWT_SECRET,
    //             {
    //                 expiresIn: "2h",
    //             }
    //         );
    //         //         const { password, ...userData } = user._doc;
    //         //         res.status(200).json( { user: userData, token });
    //         res.cookie('token', token, { httpOnly: true, sameSite: 'Strict' });
    //         res.status(200).json({ user, token });
    //     } else {
    //         res.status(400).json({ error: 'Invalid Credentials' });
    //     }
    // } catch (err) {
    //     return next(err);
    // }
    console.log('Hello!');
    console.log(req.body)
};