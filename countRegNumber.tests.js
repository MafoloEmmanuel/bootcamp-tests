describe("countRegNumber function", function(){

    it("Should count the registration numbers in a string", function(){
        assert.equal(countRegNumber('CA 182736,CY 523519'), 2);
    });
    it("Should count the registration numbers in a string", function(){
        assert.equal(countRegNumber('CA 182736,CY 523519, CD 188936'), 3 );
    });
});