import { findClosestDate } from "../modules/module-utils/findClosestDate";
import { testRates } from "./fixtures/exchangeRates";

describe("Date range fetch tests", () => {
	test("will return first idx when providing past date", () => {
		const pastDate = new Date("2015-01-01").getTime();
		const idx = findClosestDate(pastDate, testRates);

		expect(idx).toBe(0);
	});

	test("will return exact match when providing an included date", () => {
		const pastDate = new Date("2016-01-29").getTime();
		const idx = findClosestDate(pastDate, testRates);

		expect(idx).toBe(0);
	});

	test("will return last index when providing future date", () => {
		const pastDate = new Date("2021-02-08").getTime();
		const idx = findClosestDate(pastDate, testRates);

		expect(idx).toBe(testRates.length - 1);
	});
});
