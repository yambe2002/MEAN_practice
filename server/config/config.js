var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
  development: {
    db: 'mongodb://localhost/mean_practice',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    db: 'mongodb://yuzo:sausi@ds039674.mongolab.com:39674/mean_practice',
    rootPath: rootPath,
    port: process.env.PORT || 80
  }
};
