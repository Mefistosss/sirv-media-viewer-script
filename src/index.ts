import loadScript from 'load-script2';
const SRC = 'https://scripts.sirv.com/sirvjs/v3/sirv.js';

let scriptPromise: Promise<any> | null = null;
const loadSMVScript = (attrs?: object, parentNode?: HTMLElement) :Promise<any> => {
    if (!scriptPromise) {
        scriptPromise = new Promise((resolve, reject) => {
            if ((window as any).Sirv) {
                resolve((window as any).Sirv);
            } else {
                loadScript(SRC, attrs, parentNode)
                    .then(() => {
                        resolve((window as any).Sirv); })
                    .catch((err) => {
                        reject(err);
                    });
            }
        });
    }

    return scriptPromise;
};

export default loadSMVScript;
