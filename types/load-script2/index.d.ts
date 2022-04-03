declare module 'load-script2' {
    export default function loadScript(src: string, attrs?: object, parentNode?: HTMLElement): Promise<HTMLElement>;
}
