const {Router} = require('express');
const router = Router();

const User = require('./../model/User');

router.post('/register', async(req, res) => { //Registrar usuarios
    const user = new User();
    const {password, username} = req.body;
    user.username = username;
    user.password = password;

    await user.save();

    const allUsers = await User.find(); 
    console.log(allUsers);
    res.send('Usuario Creado!');
});

router.post('/login', (req, res) => { //Ruta para log usuario
    const {password, username} = req.body;
    User.findOne({username: username, password: password}, (err, user) => {
        if (err) return res.sendStatus(404);

        console.log(user);
        res.sendStatus(200);
    });
});

router.post('/message', (req, res) => { //Recibir mensaje de la App
    const {message} = req.body;
    console.log('Mensaje de la app: ',message);
    res.sendStatus(200);
});

module.exports = router;