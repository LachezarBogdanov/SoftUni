import {page} from "../lib.js";
import { del } from "../data/api.js";


export async function onDelete(ctx) {
    const id = ctx.params.id;
    
    const choice = confirm('Are you sure?');
    
    if(choice) {
        await del('/data/characters/' + id);

        page.redirect('/characters');
    }
}