var seaport = require('seaport')

var noop = function() {}

module.exports = function(port) {
  var closed = false
  var ports = seaport.connect(port)

  var listen = function() {
    var server = seaport.createServer()

    server.server.on('error', noop)
    server.on('connection', function(connection) {
      if (connection.unref) connection.unref()
    })

    server.on('listening', function() {
      if (closed) return server.close()
      ports.server = server
      ports.emit('listening')
      ports.emit('master')
    })

    server.listen(port)
  }

  ports.on('disconnect', listen)

  ports.on('close', function() {
    if (ports.server) ports.server.close()
    closed = true
  })

  listen()

  return ports
}