import validator from "validator"
import axios from "axios"
import {load} from "cheerio"
import { parseHTML } from "../utils/parser.js";
import ApplicationError from "../errorhandlers/errorhandler.js";

export default class auditService {
    async auditWebsite(url) {
        try {
            //validating url
            const checkUrl = validator.isURL(url.trim(),{require_protocol:true});
            if (!checkUrl) {
                throw new ApplicationError("invalid url",400);
            }
            const start=Date.now();
            //fetch HTML
            const response = await axios.get(url);
            const responseTime=Date.now()-start;
            //parse HTML
            const seoData=parseHTML(response.data);
            //return response
            return {
                success: true,
                status: response.status,
                htmlLength:response.data.length,
                responseTime,
                ...seoData
            };
        } catch (err) {

            if(err instanceof ApplicationError){
                throw err;
            }

            if (err.code === "ECONNABORTED") {
                throw new ApplicationError("Request timed out",504);
            }

            if (err.code === "ENOTFOUND") {
                throw new ApplicationError("Website not found",404);
            }

            if (err.code === "ERR_TLS_CERT_ALTNAME_INVALID" ||
                err.code === "DEPTH_ZERO_SELF_SIGNED_CERT"
            ) {
              throw new ApplicationError("Website is not reachable or has an invalid SSL certificate.");
            }
             throw new ApplicationError("Internal Server Error", 500);
        }
    }
}