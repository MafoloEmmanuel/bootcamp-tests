describe("countAllPaarl function", function(){

    it("should count all the registration numbers for Paarl", function(){
        assert.equal(countAllPaarl('CJ 182736,CJ 523519, CD 188936'),2);
    });
    it("should count all the registration numbers for Paarl", function(){
        assert.equal(countAllPaarl('CA 182736,CY 523519, CD 188936'),0);
    });
    it("should count all the registration numbers for Paarl", function(){
        assert.equal(countAllPaarl('CJ 182736,CA 523519, CD 188936'),1);
    });
})