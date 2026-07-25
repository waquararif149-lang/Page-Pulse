import validator from "validator"
import axios from "axios"
import {load} from "cheerio"
import { parseHTML } from "../utils/parser.js";

export default class auditService {
    async auditWebsite(url) {
        try {
            //validating url
            const checkUrl = validator.isURL(url.trim(),{require_protocol:true});
            if (!checkUrl) {
                throw new Error("invalid url");
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
            if (err.code === "ECONNABORTED") {
                throw new Error("Request timed out");
            }

            if (err.code === "ENOTFOUND") {
                throw new Error("Website not found");
            }

            if (err.code === "ERR_TLS_CERT_ALTNAME_INVALID") {
              throw new Error("Website is not reachable or has an invalid SSL certificate.");
            }
            throw err;
        }
    }
}