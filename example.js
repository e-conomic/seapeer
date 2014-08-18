var seapeer = require('seapeer')

var ports = seapeer(9999)

ports.register('web', {
  port: 10000
})

ports.on('master', function() {
  console.log('seaport: i am master now')
})

ports.get('web', function(ps) {
  console.log('found web:', ps)
})