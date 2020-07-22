'use strict';

const getRedisClient = require( 'get-redis-client' );


module.exports = Object.freeze( async ({

    redisFunction = async () => {},
    args = [],
    functionName = 'Redis Function'

}) => {
    
    console.log( `💘🦏running doRedisFunction for ${ functionName }` );

    const redisClient = getRedisClient();

    try {

        const results = await redisFunction(
            {
                redisClient
            },
            ...args
        );

        redisClient.quit();

        console.log(
            '💘🦏doRedisFunction executed successfully ' +
            `for ${ functionName }`
        );

        return results;
    }
    catch( err ) {

        redisClient.quit();

        console.log(
            
            `💘🦏error in doRedisFunction for ${ functionName }:`,
            err
        );

        throw err;
    }
});
