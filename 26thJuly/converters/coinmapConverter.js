const filterCoinmapAPIValues = (result, category, maxAmount) => {
    let newResults = []

    result.sort((a,b) => {
        return parseInt(a.id) - parseInt(b.id)
    })

    for (item of result) {
        if (maxAmount && newResults.length >= maxAmount) break
        if (item.category === category) {
            newResults.push({
                id: item.id,
                name: item.name
            })
        }
    }

    return newResults
}

module.exports = {
    filterCoinmapAPIValues
}