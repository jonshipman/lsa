import type { SvelteComponentTyped } from 'svelte';

export interface ScrollDetail {
	scrollY: number;
	top: number;
	left: number;
	height: number;
	width: number;
}

export default class Scroll extends SvelteComponentTyped {}
