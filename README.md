# drf

[![npm version](https://badge.fury.io/js/drf.svg)](https://badge.fury.io/js/drf)

<img
    src="https://bitcoin-api.s3.amazonaws.com/documents/open-source/drf/DoctorF-by-Azubuike-Nwadike.png"
    width="300"
/>


### Dr. F - Do Redis Function


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

### Credits:

**[Bitcoin-Api](https://github.com/bitcoin-api)**

**Coding:** [Michael Stecky-Efantis](https://www.linkedin.com/in/bitcoin-api) - contact for enterprise [Bitcoin-Api.io](https://bitcoin-api.io) Bitcoin and crypto services - add crypto to your business!

**Art Design:** [Azubuike Nwadike](https://www.facebook.com/xbilldn) - contact to hire for excellent quality design and art work