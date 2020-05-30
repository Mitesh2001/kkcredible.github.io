const fileSystem = require('fs');

exports.handler = async function (event, context) {
    try {
        const newsletters = fileSystem.readFile('database/newsletters.json');

        return {
            statusCode: 200,
            body: JSON.stringify({
                newsletters: newsletters
            }),
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                msg: err.message
            })
        }
    }
}
