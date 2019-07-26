const mongoose = require('mongoose');
let URI = 'mongodb://localhost/eCloudExample';

mongoose.connect(URI, {useNewUrlParser: true})
    .then(db => console.log('DB Connected!'))
    .catch(err => console.log(err));