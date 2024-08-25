import { del } from "../data/api.js";
import {page} from '../lib.js';


export async function deleteHandler(ctx) {
    let id = ctx.params.id;

    let choice = confirm('Are you sure you want to delete this record?');

    if(choice) {
        await del('/data/tattoos/' + id);

        page.redirect('/dashboard');
    }
}