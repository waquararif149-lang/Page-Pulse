import { parseHTML } from "../src/utils/parser.js";
import { validHTML } from "./smapleHtml.js";
import { noMetaHTML } from "./smapleHtml.js";
import { noTitleHTML } from "./smapleHtml.js";

describe("parseHTML",()=>{
   test("Happy Path", () => {
    const result = parseHTML(validHTML);
    expect(result.title).toBe("Page Pulse");
    expect(result.metaDescription).toBe("A simple SEO audit tool");
    expect(result.h1Count).toBe(2);
    expect(result.imagesMissingAlt).toBe(1);
    expect(result.wordCount).toBeGreaterThan(0);
})

   test("Missing Title", () => {
    const result = parseHTML(noTitleHTML);
    expect(result.title).toBe("");
    expect(result.metaDescription).toBe("Testing missing title");
    expect(result.h1Count).toBe(1);
    expect(result.imagesMissingAlt).toBe(0);
    expect(result.wordCount).toBeGreaterThan(0);
})

   test("Missing Meta Description", () => {
    const result = parseHTML(noMetaHTML);
    expect(result.title).toBe("Parser Test");
    expect(result.metaDescription).toBe("");
    expect(result.h1Count).toBe(1);
    expect(result.imagesMissingAlt).toBe(1);
    expect(result.wordCount).toBeGreaterThan(0);
   })
})