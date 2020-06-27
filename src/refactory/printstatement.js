 require('babel-register');

 function statement(invoice, plays){
 	let totalAmout=0;
 	let volumeCredits=0;
 	let result=`Statement for ${invoice.customer}\n`;
 	const format = new Intl.NumberFormat("en-Us",{style:"currency",currency:"USD",minimumFractionDigits:2}).format;

 	for (let perf of invoice.performances) {
 		const play = plays[perf.playID];
 		let thisAmout=0;

 		switch (play.type){
 			case "tragedy":
 				thisAmout=40000;
 				if(perf.audience>30){
 					thisAmout+=1000*(perf.audience-30);
 				}
 				break;
 			case "comedy":
 				thisAmout=30000;
 				if(perf.audience>20){
 					thisAmout+=10000+500*(perf.audience);
 				}
 				thisAmout+=300*perf.audience;
 				break;
 				default:
 					throw new Error('unknow type: ${play.type}');
 		}

 		volumeCredits+=Math.max(perf.audience-30,0);

 		if("comedy"===play.type) volumeCredits+=Math.floor(perf.audience/5);

 		result+=`${play.name}:${format(thisAmout/100)} (${perf.audience} seats)\n`;
 		totalAmout+=thisAmout;
 	}
 	result+=`Amount owed is ${format(totalAmout/100)}\n`;
 	result+=`You earned ${volumeCredits} credits\n`;
 	return result;
 }



 export {statement,loadJson};

 function  loadJson(filePath){
 	const fs = require('fs');
 	let fileString=fs.readFileSync(filePath,'utf8');
 	let result=JSON.parse(fileString)
 	return result;
 } 
 //loadJson('plays.json');





