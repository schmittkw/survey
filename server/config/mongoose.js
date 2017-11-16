// The only purpose of this file is to connent to our database

const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/survey_practice_DB', { useMongoClient: true});
mongoose.Promise = global.Promise;

const models_path = __dirname + '/../models';

fs.readdirSync(models_path).forEach(function(file){
    if(file.includes('.js')){
        console.log(`mongoose.js line 13...loading ${file}...`)
        require(`${models_path}/${file}`);
    }
})