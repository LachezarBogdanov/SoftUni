import {page} from "../lib.js";
import { del } from "../data/api.js";

export async function onDelete(ctx) {
    let id = ctx.params.id;

    const choice = confirm('Are you sure you want to delete this fact?');

    if(choice) {
        await del('/data/facts/' + id);

        page.redirect('/dashboard');
    }
}