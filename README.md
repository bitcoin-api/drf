# drf

[![npm version](https://badge.fury.io/js/drf.svg)](https://badge.fury.io/js/drf)

drf - Do Redis Function


## About

Fast access to redis functionality. Great to use in combination with [do-redis-request](https://github.com/bitcoin-api/do-redis-request).


## Installation
```
npm install drf --save
```

## Set Up
Your Redis URL can be set using the environment variable `process.env.REDIS_URL`. The default Redis URL is `127.0.0.1:6379`.


## Example
```.js
'use strict';

const drf = require( 'drf' );
const doRedisRequest = require( 'do-redis-request' );


(async () => {

    const drfResponse = await drf({

        redisFunction: async ({

            redisClient

        }) => {

            const redisValue = await doRedisRequest({

                client: redisClient,
                command: 'get',
                redisArguments: [ 'redisKey' ],
            });

            return redisValue;
        },

        functionName: 'test function'
    });

    console.log( 'Redis Value:', drfResponse );
})();
```