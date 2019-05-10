exports.handler = function(context, event, callback) {
  callback(null, (new Date().toLocaleString()));
}