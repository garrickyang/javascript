import {createStatementData} from "./createStatementData.js"

function statement(invoice, plays){

	return renderPlainText(createStatementData(invoice, plays));

}

function renderPlainText(data, plays){
	let totalAmout=0;

	let result=`Statement for ${data.customer}\n`;

	for (let perf of data.performances) {
		result+=`${perf.play.name}:${usdFormat(perf.amount/100)} (${perf.audience} seats)\n`;
	}

	result+=`Amount owed is ${usdFormat(data.totalAmount/100)}\n`;
	result+=`You earned ${data.totalVolumeCredits} credits\n`;
	return result;

}
function usdFormat(aNumber){
	return new Intl.NumberFormat("en-Us",{style:"currency",currency:"USD",
		minimumFractionDigits:2}).format(aNumber);
}



function  loadJson(filePath){
	const fs = require('fs');
	let fileString=fs.readFileSync(filePath,'utf8');
	let result=JSON.parse(fileString)
	return result;
} 

export {statement,loadJson};



