# drf

[![npm version](https://badge.fury.io/js/drf.svg)](https://badge.fury.io/js/drf)

drf - Do Redis Function


## About

Fast Access to Redis Functionality


## Set Up
`process.env.REDIS_URL` needs to be set to your Redis URL


## Example
preview: code coming soon

```.js
'use strict';

// assumes process.env.REDIS_URL is your Redis URL

const drf = require( 'drf' );


(async () => {

    const response = await drf({

        redisFunction: ({

            redisClient

        }) => {

            return new Promise( ( resolve, reject ) => {

                redisClient.get( 'megaKey', ( err, response ) => {
                    
                    if( !!err ) {

                        return reject( err );
                    }

                    resolve( response );
                });
            });
        },
        functionName: 'test function'
    });

    console.log( response );
})();
```