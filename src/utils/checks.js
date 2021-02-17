import opt from "./selects";
export function speed(v) {
	let lim = true
	v > 1.5 ? lim = true : lim = false
	return { lim };
};
export function no_i6(du) {
	let a = false;
	(du > 80 || du < 25) ? (a = true) : (a = false);
	(du == 0 || !du) ? (a = false) : '';
	return { a };
};
export function no_mod(du) {
	let a = false;
	(du > 80 || du < 32) ? (a = true) : (a = false);
	(du == 0 || !du) ? (a = false) : '';
	return { a };
};

export function diapT4(du) {
	let pos = opt.du_im.map(function (el) {
		return el.value;
	}).indexOf(du);
	let diap = opt.du_im.slice(0, pos + 1);
	return { diap };
};


