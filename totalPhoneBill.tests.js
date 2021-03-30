describe("totalPhoneBill function", function(){

    it("Should calculate the total bill for the data provided", function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), 'R'+7.45.toFixed(2));
    });

    it("Should calculate the total bill for the data provided", function(){
        assert.equal(totalPhoneBill('call, call, sms, sms'), 'R'+6.80.toFixed(2));
    });
    
    it("Should calculate the total bill for the data provided", function(){
        assert.equal(totalPhoneBill('call, call, sms, sms, call, call'), 'R'+12.30.toFixed(2));
    });
})