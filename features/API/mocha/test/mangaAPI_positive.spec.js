import axios from "axios";
import { expect } from "chai";
import validator from "jsonschema";
import searchMangaSchema from "../validationSchemes/searchManga.get.json" assert { type: 'json' };
import seeCommentsSchema from "../validationSchemes/seeComments.get.json" assert { type: 'json' };
import mangaShortInfoSchema from "../validationSchemes/mangaShortInfoSchema.json" assert { type: 'json' };

describe('API related to Manga Lists - positive cases', async()=>{
    const requests = [
        {API: 'https://mangalib.org/search?type=manga&q=boss', code: 200, JSONSchema: searchMangaSchema},
        {API: 'https://mangalib.org/api/v2/comments?type=manga&post_id=53591&order=latest ', code: 200, JSONSchema: seeCommentsSchema},
        {API: 'https://mangalib.org/manga-short-info?slug=adabana&id=33052&advanced_info=1&type=manga', code: 200, JSONSchema: mangaShortInfoSchema}
    ]
    requests.forEach(({API, code})=>{
            it(`Check that GET ${API} response code is ${code}`, async()=>{

                let response
            try{
                response = await axios({
                    method: 'Get',
                    url: API,
                    headers: {
                            accept: "application/json",
                            'Content-Type': "application/json"
                        }, 
                })
            } catch(error){
                response = error.response
            } 
            await expect(response.status).to.be.equal(code)
            })
        })
    requests.forEach(({API, JSONSchema})=>{
            it(`Check that GET ${API} response returns body matching its JSONSchema`, async()=>{
                let response
            try{
                response = await axios({
                    method: 'Get',
                    url: API,
                    headers: {
                            accept: "application/json",
                            'Content-Type': "application/json"
                        }, 
                })
            } catch(error){
                response = error.response
            } 
            let isValid = await validator.validate(response.data, JSONSchema).valid
            await expect(isValid).to.be.true
            })
})
})
