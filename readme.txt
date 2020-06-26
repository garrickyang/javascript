Javascript mocha test
1. Install node node
2. Install mocha npm install --save-dev mocha 
3. Install es6 support npm install --save-dev babel-core babel-register babel-preset-es2015
4. Create js project(js file) 
5. Create js file, and create mocha test file
6. 在测试类里加 require('babel-register');
7. node_modules/mocha/bin/mocha --require babel-register //支持 es6
8. XXXtest.js will identify and run test