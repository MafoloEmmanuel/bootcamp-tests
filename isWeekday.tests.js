describe("isWeekDay function", function(){

    it('should be the day of the week', function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should be the day of the week', function(){
        assert.equal(isWeekday('january'), false);
    });
    it('should be the day of the week', function(){
        assert.equal(isWeekday('Saturady'), false);
    });

})