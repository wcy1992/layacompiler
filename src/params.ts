import { argv } from './argv';
import * as path from 'path';
import * as url from 'url';

let params: any = {};
const paramsStr: string = argv.params;
let pairs: string[] = paramsStr.split(';');
for (let i: number = 0; i < pairs.length; i++) {
    if (!pairs[i]) continue;
    let pairStr: string = pairs[i];
    let pair: string[] = pairStr.split('=');
    params[pair[0]] = pair[1];
}
export { params };