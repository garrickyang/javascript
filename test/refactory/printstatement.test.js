require('babel-register');
const assert = require('assert');
import {loadJson,statement} from "../../src/refactory/printstatement.js";

describe('#printstatement.js', () => {

	describe('#loadJson()', () => {
		it('#play Json should loaded ', () => {
			let testFile='src/refactory/plays.json';
			let jsonObject=loadJson(testFile);
			//console.log(jsonObject["hamlet"])
			assert.strictEqual('{"name":"Hamlet","type":"tragedy"}', JSON.stringify(jsonObject.hamlet));
		});

		it('#invoice Json should loaded ', () => {
			let testFile='src/refactory/invoice.json';
			let jsonObject=loadJson(testFile)[0];
			//console.log(jsonObject.performances);
			
			assert.strictEqual("BigCo", jsonObject.customer);
		});
	});

	describe('#statement()', () => {
		it('statement is correct', () => {
			let playsFile='src/refactory/plays.json';
			let invoiceFile='src/refactory/invoice.json';
			let plays=loadJson(playsFile);
			let invoice=loadJson(invoiceFile)[0];
			let expectedResult="Statement for BigCo\n"+
						"Hamlet:$650.00 (55 seats)\n"+
						"as you like it:$680.00 (35 seats)\n"+
						"Othello:$500.00 (40 seats)\n"+
						"Amount owed is $1,830.00\n"+
						"You earned 47 credits\n";
			let actualResult=statement(invoice,plays);
			//console.log(expectedResult.hash);
			assert.strictEqual(expectedResult, actualResult);
		});

		
	});

});