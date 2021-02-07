export function findClosestDate(date: number, rates: string[][]) {
	// binary search will find exact index or closest greater value's index

	let left = 0;
	let right = rates.length;
	let closest = rates.length;
	let mid;
	while (left < right) {
		mid = left + Math.floor((right - left) / 2);
		const midDate = new Date(rates[mid][0]).getTime();
		if (midDate === date) {
			return mid;
		} if (midDate > date) {
			closest = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return closest - 1 > 0 ? closest - 1 : 0;
}
