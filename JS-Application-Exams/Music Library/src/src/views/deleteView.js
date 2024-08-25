import { del } from "../data/api.js";
import {page} from '../lib.js';


export async function deleteView(ctx) {
    let id = ctx.params.id;
    debugger
    let choice = confirm('Are you sure!');

    if(choice) {
        await del('/data/albums/' + id);

        page.redirect('/dashboard');
    }
}