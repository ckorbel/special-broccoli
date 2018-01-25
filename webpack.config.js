const path = require('path');


module.exports = {
    entry: './src/app.js', 
    output: {
        path: path.join(__dirname, 'public'), //must be an absolute path this changes depending on machine run
        filename: 'bundle.js'
    }
};