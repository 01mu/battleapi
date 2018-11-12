/*
 * battleapi.herokuapp.com
 * github.com/01mu
 */

function showResult(https, url, res) {
    https.get(url, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            res.send(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

module.exports.showResult = showResult;
