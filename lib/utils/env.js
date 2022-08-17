const fs = require("fs");
const os = require("os");
const envFIle = "./conf.txt"

// this code from: https://stackoverflow.com/questions/64996008/update-attributes-in-env-file-in-node-js
module.exports = function(key, value) {

    // read file from hdd & split if from a linebreak to a array
    const ENV_VARS = fs.readFileSync(envFIle, "utf8").split(os.EOL);

    // find the env we want based on the key
    const target = ENV_VARS.indexOf(ENV_VARS.find((line) => {
        return line.match(new RegExp(key));
    }));

    // replace the key/value with the new value
    ENV_VARS.splice(target, 1, `${key}=${value}`);

    // write everything back to the file system
    fs.writeFileSync(envFIle, ENV_VARS.join(os.EOL));

}