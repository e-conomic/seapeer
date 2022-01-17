Archived
======
Tech Leads: Repository archived due to inactivity in more than 6 months.
Please remember to add a CODEOWNERS file to the root of the repository when unarchiving.

# seapeer

[Seaport](https://github.com/substack/seaport) client and server combined with automatic failover

```
npm install seapeer
```

[![build status](http://img.shields.io/travis/e-conomic/seapeer.svg?style=flat)](http://travis-ci.org/e-conomic/seapeer)

This module allows you to run seaport without explicitly starting a seaport server.
Instead one of the clients accessing seaport will become the server. If that client dies
another one will take his place

## Usage

``` js
var seapeer = require('seapeer')

// 9090 is the port that will be used (should be the same in all clients)
var ports = seapeer(9090)

ports.on('master', function() {
  console.log('i am hosting the server now')
})

// register an app
ports.register('web', {port:10000})

ports.get('web', function(ps) {
  console.log('web:', ps)
})
```

Try running the above example in a couple of processes

## License

MIT
