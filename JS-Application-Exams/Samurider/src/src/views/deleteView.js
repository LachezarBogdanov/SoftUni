import {page} from "../lib.js";
import { del } from "../data/api.js";


export async function onDelete(ctx) {
    let id = ctx.params.id;

    let choice = confirm('Are you sure?');
debugger
    if(choice) {
        await del('/data/motorcycles/' + id);

        page.redirect('/dashboard');
    }

}