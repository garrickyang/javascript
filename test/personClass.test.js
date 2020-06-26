require('babel-register');
const assert = require('assert');
import {Person} from "../src/personClass";



describe('personClass.js', () =>{
	it('person.getName return name', () =>{
		let person = new Person("Yang Gui");
		assert.equal("Yang Gui",person.getName());
	});
});
