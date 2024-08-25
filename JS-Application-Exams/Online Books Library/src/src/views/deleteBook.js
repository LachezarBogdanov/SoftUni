import { del } from "../data/api.js";
import {page} from '../lib.js';


export async function deleteBook(ctx) {

    let id = ctx.params.id;
    let choice = confirm('Are you sure?');

    if(choice) {
        await del('/data/books/' + id);
        page.redirect('/dashboard');
    }

}