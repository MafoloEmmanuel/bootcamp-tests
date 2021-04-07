describe("isWeekDay function", function(){

    it('should return true for Monday because its a weekday', function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('should return false for january because its a year and not a day', function(){
        assert.equal(isWeekday('january'), false);
    });
    it('should return false for Sunday because its not the day of the week', function(){
        assert.equal(isWeekday('Saturady'), false);
    });

})