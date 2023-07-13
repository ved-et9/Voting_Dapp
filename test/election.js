var Election=artifacts.require("./election.sol");

contract("Election",function(accounts){
    it("intialize with Five candidates",function(){
        return Election.deployed().then(function(instance){
            return instance.candidatesCount();

        }).then(function(count){
            assert.equal(count,5);
        });
    });
});