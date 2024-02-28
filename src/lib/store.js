import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let localData = null;
// lesen aus dem localStorage:
if (browser) {
    localData = localStorage.patterns
        ? JSON.parse(localStorage.patterns)
        : null;
}

export const defaultValue = [
    {
        id: 1,
        name: "bait'n'switch",
        slug: "bait-switch",
        done: false
    },
    {
        id: 2,
        name: "confirmshaming",
        slug: "confirmshaming",
        done: false
    },
    {
        id: 3,
        name: "hidden costs",
        slug: "hidden-costs",
        done: false
    },
    {
        id: 4,
        name: "misdirection",
        slug: "misdirection",
        done: false
    },
    {
        id: 5,
        name: "overloading",
        slug: "overloading",
        done: false
    },
    {
        id: 6,
        name: "price comparison prevention",
        slug: "price-comparison-prevention",
        done: false
    },
    {
        id: 7,
        name: "roach motel",
        slug: "roach-motel",
        done: false
    },
    {
        id: 8,
        name: "simulated urgency",
        slug: "simulated-urgency",
        done: false
    },
]

export const patterns = writable(localData || defaultValue);

// schreiben in den localStorage:
patterns.subscribe((value) => {
    if (browser)
        localStorage.patterns = JSON.stringify(value);
});
let savedTheme = null;
// lesen aus dem localStorage:
if (browser) {
    savedTheme = localStorage.theme
        ? JSON.parse(localStorage.theme)
        : null;
}
export const theme = writable(savedTheme || "synthwave");

theme.subscribe(value => {
    if (browser)
        localStorage.theme = JSON.stringify(value);
})

