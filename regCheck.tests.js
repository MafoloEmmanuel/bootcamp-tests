describe("regCheck", function(){

    it('The registration number should end with GP,L,EC,MP', function(){
        assert.equal(regCheck("CY 189-012", 'ND'), false);
    });
    it('The registration number should end with GP,L,EC,MP', function(){
        assert.equal(regCheck("GH 78 BX GP", 'GP'), true);
    });
    it('The registration number should end with GP,L,EC,MP', function(){
        assert.equal(regCheck('CY 189-012', 'CY'), false);
    });

})