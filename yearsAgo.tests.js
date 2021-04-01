describe("yearsAgo function", function(){

    it("Should show how many years ago a given year is from the current year.", function(){
        assert.equal(yearsAgo('1970'), 51);
    });
    it("Should show how many years ago a given year is from the current year.", function(){
        assert.equal(yearsAgo('1999'), 22);
    });
    it("Should show how many years ago a given year is from the current year.", function(){
        assert.equal(yearsAgo(2000), 21);
    });
})