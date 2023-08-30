import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import validator from "jsonschema";
import searchMangaSchema from "./validationSchemes/searchManga.get.json" assert { type: 'json' };
import seeCommentsSchema from "./validationSchemes/seeComments.get.json" assert { type: 'json' };
import seeCommentsInvalidSchema from "./validationSchemes/seeCommentsInvalidSchema.json" assert { type: 'json' };
import mangaShortInfoSchema from "./validationSchemes/mangaShortInfoSchema.json" assert { type: 'json' };


Then(/^I expect response code to be (.*)$/, async function(code){
    const world = this
    await expect(world.response.status).to.be.equal(Number(code))
})
Then(/^I expect JSON schema to equal (.*)$/, async function(nameOfSchema){
    const world = this
    let JSONSchema
    switch(nameOfSchema){

        case 'searchMangaSchema':
            JSONSchema = searchMangaSchema;
            break;

        case 'seeCommentsSchema':
            JSONSchema = seeCommentsSchema;
            break;

        case 'seeCommentsInvalidSchema':
            JSONSchema = seeCommentsInvalidSchema;
            break;

        case 'mangaShortInfoSchema':
            JSONSchema = mangaShortInfoSchema;
            break;
    }
    
    const isValid = validator.validate(world.response.data, JSONSchema).valid
    expect(isValid).to.be.true
})