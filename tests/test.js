const load = require('../');
const test = require('tape');

test('test of sirv existing', (t) => {
    load()
        .then((sirv) => {
            t.ok(!!sirv, 'sirv is exist');
            t.end();
        })
        .catch((err) => {
            t.error(err, err.message);
            t.end();
        });
});
