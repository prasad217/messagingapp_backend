import bcrypt from 'bcryptjs';

export async function register(req, res) {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({
            username,
            password: hashedPassword,
        });
        res.status(201).json(user);
    }
 catch (error){
    res.status(500).json({ error: 'Error registering user' });  
 }
}
