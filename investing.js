
  
const puppeteer = require("puppeteer");
const cheerio = require("cheerio");




async function scrapArticle(page) {
  await page.goto("https://www.investing.com");
  const html = await page.content();
  const $ = cheerio.load(html);
 
  const Link = $(".carouselNews").map((index, element) => {
    const urlElement = $(element).find(".title:contains('Stocks')");
    const url1 = $(urlElement).attr('href');
    const url = 'https://www.investing.com/' + url1;
    return {url};
}).get();
  return Link;
  
}

async function article(Link, page, element) {
  for (var i = 0; i < Link.length; i++) {
      await page.goto(Link[i].url);
      const html = await page.content();
      const $ = cheerio.load(html);
      const title = $('.articleHeader').text();
      const img = $('#carouselImage').attr('src');
      const p1 = $("p:contains('-')").text();
      Link[i].title = title;
      Link[i].img = img;
      Link[i].p1 = p1;
      console.log(Link[i].title);
      console.log(Link[i].url);
      console.log(Link[i].img);
      console.log(Link[i].p1);
      await sleep(1000);
    //   fs.writeFile("article.csv", stringify(title, img, p1), function(err) {
    //     if (err) throw err;
    //     console.log("Saved!")});
      
  }
 
}

async function sleep(miliseconds) {
  return new Promise(resolve => setTimeout(resolve, miliseconds));
}

async function main() {
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  const Link = await scrapArticle(page);
  const LinkWithJd = await article (Link, page);
  

  console.log(Link);
  
 
console.log('Done!');
};


main();

