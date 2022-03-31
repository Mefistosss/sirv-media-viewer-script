const loadScript = require('load-script2');
const SRC = 'https://scripts.sirv.com/sirvjs/v3/sirv.js';

let scriptPromise = null;
const load = (attrs, parentNode) => {
    if (!scriptPromise) {
        scriptPromise = new Promise((resolve, reject) => {
            if (window.Sirv) {
                resolve(window.Sirv);
            } else {
                loadScript(SRC, attrs, parentNode)
                    .then(() => { resolve(window.Sirv); })
                    .catch(reject);
            }
        });
    }

    return scriptPromise;
};

module.exports = load;
