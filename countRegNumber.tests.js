describe("countRegNumber function", function(){

    it("Should return a count of 2", function(){
        assert.equal(countRegNumber('CA 182736,CY 523519'), 2);
    });
    it("Should return a count of 3", function(){
        assert.equal(countRegNumber('CA 182736,CY 523519, CD 188936'), 3 );
    });
    
});