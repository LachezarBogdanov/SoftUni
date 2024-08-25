import { del } from "../data/api.js";
import { page } from "../lib.js";


export async function deleteView(ctx) {
    
    let id = ctx.params.id;
    let choice = confirm('Are you sure you want to delete?');

    if(choice) {
        await del('/data/solutions/' + id);

        page.redirect('/dashboard');
    }
}