const loadSMVScript = require('../');
const test = require('tape');

test('test of sirv existing', (t) => {
    loadSMVScript()
        .then((sirv) => {
            t.ok(!!sirv, 'sirv is existing');
            t.end();
        })
        .catch((err) => {
            t.error(err, err.message);
            t.end();
        });
});
