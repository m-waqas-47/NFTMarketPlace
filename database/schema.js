const client = require('./config');

const execute = async (query) => {
    try {
        await client.connect();     // gets connection
        
        await client.query(query);  // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();         // closes connection
    }
};

const collections = `
    CREATE TABLE IF NOT EXISTS "collections" (
	    "address" VARCHAR(200) NOT NULL,
	    "owner" VARCHAR(50) NOT NULL,
	    "name" VARCHAR(50) NOT NULL,
	    "symbol" VARCHAR(20) NOT NULL,
	    "chainID" VARCHAR(50) NOT NULL,
	    "description" VARCHAR(200) NOT NULL,
	    "metadataUrl" VARCHAR(50) NOT NULL,
	    "coverImage" VARCHAR(50) NOT NULL,
	    "profileImage" VARCHAR(50) NOT NULL,
	    "category" VARCHAR(50) NOT NULL,
	    "collectionSize" VARCHAR(50) NOT NULL,
	    "isThorCollection" BOOLEAN,
        "isERC731" BOOLEAN,
        "isERC1155" BOOLEAN,
        "isVerified" BOOLEAN,
        "isP2E" BOOLEAN,
        "twitter" VARCHAR(50) NOT NULL,
        "discord" VARCHAR(50) NOT NULL,
        "web" VARCHAR(50) NOT NULL,
        "ListedTime" TIME,
        "updateTime" TIME,
	    PRIMARY KEY ("address")
    );`;

    const thorCollection = `CREATE TABLE IF NOT EXISTS "thorCollection"(
        "address" VARCHAR(200) NOT NULL,
        "name" VARCHAR(50) NOT NULL,
        "tier" VARCHAR(20) NOT NULL,
        "rewardsDetail" TEXT NOT NULL,
        "tdbFields" VARCHAR(100) NOT NULL,
    );`;

// execute(collections).then(result => {
//     if (result) {
//         console.log('Table collections created');
//     }
// });

execute(thorCollection).then(result => {
    if (result) {
        console.log('Table thorCollections created');
    }
});