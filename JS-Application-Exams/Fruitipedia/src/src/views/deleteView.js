import { del } from "../data/api.js";
import { page } from "../lib.js";


export async function deleteView(ctx) {
    let id = ctx.params.id;

    let choice = confirm('Are you sure?');

    if(choice) {
        await del('/data/fruits/' + id);

        page.redirect('/dashboard');
    }
}