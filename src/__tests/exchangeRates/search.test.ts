import request from "supertest";
import { app } from "../../app";
import {
	testDateRange,
	testLowDateRange,
	unsuportedDateRange
} from "../fixtures/exchangeRates";

describe("Exchange Rates Search integration test", () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	test("Post /exchange.rates.search should return validation error", async done => {
		const resp = await request(app)
			.post("/exchange.rates.search")
			.send({
				dateRange: testDateRange.dateRange
			});

		expect(resp.status).toBe(400);
		expect(resp.body.message).toMatch(/MESSAGE: "symbol" is required/);
		done();
	});
	test("Post /exchange.rates.search should return validation when providing an unsupported date structure", async done => {
		const resp = await request(app)
			.post("/exchange.rates.search")
			.send({
				dateRange: unsuportedDateRange.dateRange,
				symbol: "CHFUSD"
			});

		expect(resp.status).toBe(400);
		expect(resp.body.message).toMatch(/Date format should be YYYY-MM-DD/);
		done();
	});

	test("Post /exchange.rates.search should return empty dataset when given a low date range", async done => {
		const resp = await request(app)
			.post("/exchange.rates.search")
			.send({
				dateRange: testLowDateRange.dateRange,
				symbol: "CNYUSD"
			});

		expect(resp.status).toBe(200);
		expect(resp.body.data).toMatchObject([]);
		done();
	});

	test("Post /exchange.rates.search should return empty dataset when given a valid dateRange and an unknown symbol", async done => {
		const resp = await request(app)
			.post("/exchange.rates.search")
			.send({
				dateRange: testDateRange.dateRange,
				symbol: "XXXYYY"
			});

		expect(resp.status).toBe(200);
		expect(resp.body.data).toMatchObject([]);
		done();
	});

	test("Post /exchange.rates.search should return rates for a symbol given all fetching attributes are valid", async done => {
		const resp = await request(app)
			.post("/exchange.rates.search")
			.send({
				dateRange: testDateRange.dateRange,
				symbol: "CHFUSD"
			});

		expect(resp.status).toBe(200);
		expect(resp.body.data.length).toBe(4);
		done();
	});

	test("Post /exchange.rates.search should return rates for JPY given all fetching attributes are valid", async done => {
		const resp = await request(app)
			.post("/exchange.rates.search")
			.send({
				dateRange: testDateRange.dateRange,
				symbol: "JPYUSD"
			});

		expect(resp.status).toBe(200);
		expect(resp.body.data.length).toBe(4);
		done();
	});
});
