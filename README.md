# drf

[![npm version](https://badge.fury.io/js/drf.svg)](https://badge.fury.io/js/drf)

drf - Do Redis Function


## About

Fast access to redis functionality. Great to use in combination with [do-redis-request](https://github.com/bitcoin-api/do-redis-request).


## Set Up
`process.env.REDIS_URL` needs to be set to your Redis URL


## Example
preview: code coming soon

```.js
'use strict';

// assumes process.env.REDIS_URL is your Redis URL

const drf = require( 'drf' );
const doRedisRequest = require( 'do-redis-request' );


(async () => {

    const drfResponse = await drf({

        redisFunction: ({

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