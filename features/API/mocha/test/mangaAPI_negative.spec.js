import axios from "axios";
import { expect } from "chai";
import validator from "jsonschema";
import invalidSeeCommentsSchema from "../validationSchemes/invalidSeeCommentsSchema.get.json" assert { type: 'json' };

describe('API related to Manga Lists - negative cases', async()=>{
    const requests = [
        {API: 'https://mangalib.org/api/v2/comments?type=manga&order=latest', code: 400, JSONSchema: invalidSeeCommentsSchema},
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
            it(`Check that GET ${API} response returns body matching ${JSONSchema}`, async()=>{
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