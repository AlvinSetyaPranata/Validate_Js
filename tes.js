function isUrl(url) {
    return /^(http|ftp)s?:\/\/((?=.{3,253}$)(localhost|(([^ ]){1,63}\.[^ ]+)))$/.test(url)
}
console.log(isUrl("ftp://xample.com"));