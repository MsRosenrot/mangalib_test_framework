import { Then } from "@wdio/cucumber-framework";
import { expect } from "chai";
import validator from "jsonschema";
import searchMangaSchema from "./validationSchemes/searchManga.get.json" assert { type: 'json' };
import seeCommentsSchema from "./validationSchemes/seeComments.get.json" assert { type: 'json' };
import seeCommentsInvalidSchema from "./validationSchemes/seeCommentsInvalidSchema.json" assert { type: 'json' };
import invalidSeeCommentsSchema from "./validationSchemes/invalidSeeCommentsSchema.get.json" assert { type: 'json' };
import mangaShortInfoSchema from "./validationSchemes/mangaShortInfoSchema.json" assert { type: 'json' };


Then(/^I expect response code to be (.*)$/, async function(code){
    const world = this
    await expect(world.response.status).to.be.equal(Number(code))
})
Then(/^I expect JSON schema to equal (.*)$/, async function(nameOfSchema){
    const world = this
    let JSONSchema
    if(nameOfSchema === 'searchMangaSchema'){
        JSONSchema = searchMangaSchema
    } else if(nameOfSchema === 'seeCommentsSchema'){
        JSONSchema = seeCommentsSchema
    } else if(nameOfSchema === 'invalidSeeCommentsSchema'){
        JSONSchema = invalidSeeCommentsSchema
    } else if(nameOfSchema === 'mangaShortInfoSchema'){
        JSONSchema = mangaShortInfoSchema
    } else if(nameOfSchema === 'seeCommentsInvalidSchema'){
        JSONSchema = seeCommentsInvalidSchema
    }
    const isValid = validator.validate(world.response.data, JSONSchema).valid
    expect(isValid).to.be.true
})