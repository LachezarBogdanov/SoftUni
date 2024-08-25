import {page} from "../lib.js";
import { deleteCarById } from "../util.js";

export async function onDelete(ctx) {
    let id = ctx.params.id;

    const choice = confirm('Are you sure you want to delete this record?');
    
    if(choice) {
        await deleteCarById(id);

        page.redirect('/dashboard')
    }
}