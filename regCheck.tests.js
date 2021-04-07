describe("regCheck function", function(){

    it('Should return false for registration numbers that do not end with GP,L,EC or MP', function(){
        assert.equal(regCheck("CY 189-012", 'ND'), false); 
    });
    it('Should return true for registration numbers that ends with GP,L,EC or MP', function(){
        assert.equal(regCheck("GH 78 BX GP", 'GP'), true);
    });
    it('Should return false for registration numbers that do not end with GP,L,EC or MP', function(){
        assert.equal(regCheck('CY 189-012', 'CY'), false);
    });

});
