const configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds223268.mlab.com:23268/nodetodosample`;
    }
}