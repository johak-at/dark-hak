import { writable } from 'svelte/store';

// lesen aus dem localStorage:
const localData = localStorage.patterns
    ? JSON.parse(localStorage.patterns)
    : null;

export const patterns = writable(localData || [
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
]);

// schreiben in den localStorage:
patterns.subscribe((value) => {
    localStorage.patterns = JSON.stringify(value);
});
