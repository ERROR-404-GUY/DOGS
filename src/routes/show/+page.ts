import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
    const res = await fetch('/upload');
    if (res.ok) {
        const data = await res.json()
        return {
            images: data
        }
    }else {
        return error(500, {
            message: 'Can\'t load data'
        });
    }

};
