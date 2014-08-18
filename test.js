var tape = require('tape')
var seapeer = require('./')

tape('failover', function(t) {
  t.plan(2)

  var p1 = seapeer(55535)
  var p2 = seapeer(55535)

  p1.on('master', function() {
    t.ok(true, 'p1 was master')
    p1.close()
  })

  p2.on('master', function() {
    t.ok(true, 'p2 was master')
    p2.close()
  })
})

tape('can do lookups', function(t) {
  t.plan(2)

  var p1 = seapeer(55535)
  var p2 = seapeer(55535)

  p1.register('web', {port:10001})
  p2.register('web', {port:10000})

  p1.get('web', function(ps) {
    t.ok(ps, 'p1 found web')
    p1.close()
  })

  p2.get('web', function(ps) {
    t.ok(ps, 'p2 found web')
    p2.close()
  })
})