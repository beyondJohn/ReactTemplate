const fs = require('fs');
module.exports = {
    saveEntry: function (body) {

        // get petition entry from request body
        var petitionEntry = body.petitionEntry;
        
        // get database file
        var jsondb = fs.readFileSync("./petition/petition.json");
        var parsedDb = JSON.parse(jsondb);

        // add entry to petition 
        parsedDb.push(petitionEntry)

        fs.writeFileSync("./petition/petition.json", JSON.stringify(parsedDb), "utf8")
        return JSON.stringify({"success":"true"});
    }
}
