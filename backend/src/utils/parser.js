import { load } from "cheerio";

export function parseHTML(html) {

    const $ = load(html);

    const title = $("title").first().text().trim();

    const h1Count = $("h1").length;

    const imagesMissingAlt = $("img")
        .filter((i, img) => {
            const alt = $(img).attr("alt");
            return !alt || alt.trim() === "";
        })
        .length;

    const wordCount = $("body")
        .text()
        .trim()
        .split(/\s+/)
        .length;

    const metaDescription =
        $('meta[name="description"]').attr("content") || "";

    return {
        title,
        h1Count,
        wordCount,
        metaDescription,
        imagesMissingAlt
    };
}