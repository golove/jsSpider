const { getPage, findHref, findImgsrc } = require('./model');

let url = 'https://k6.c5cbca7s.pw/pw/thread.php?fid=14';



async function main() {
    let alldata = []
    let data = await getPage(url);
    // console.log(data)
    let hrefs = findHref(data.res)
    // console.log(hrefs)
    for (const e of hrefs) {
        let html = await getPage(e)
        let srcs = findImgsrc(html.res)
        alldata.unshift(srcs)
    }

    console.log(alldata, alldata.length)

}

main()