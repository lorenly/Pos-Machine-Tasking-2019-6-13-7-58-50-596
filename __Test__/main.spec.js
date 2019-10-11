const printReceipt = require('../printReceipt');

it('should be null when id not exist in product list', () =>{
	result = printReceipt.getProductById();
	expect(result).toBe("[ERROR]:");
});



it('')