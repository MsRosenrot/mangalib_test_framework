import  validator  from "jsonschema";
import axios from "axios";
import searchMangaSchema from "./validationSchemes/searchManga.get.json" assert { type: 'json' };
import seeCommentsSchema from "./validationSchemes/seeComments.get.json" assert { type: 'json' };
import { Given } from "@wdio/cucumber-framework";

Given(/^I send GET request to (.*)$/, async function(url){
    let response = await axios({
        method: 'Get',
        url: url,
        headers: {
                accept: "application/json",
                'Content-Type': "application/json"
            }, 
    })
    const world = this
    world.response = response
})
// Given(/^I send $/, )
