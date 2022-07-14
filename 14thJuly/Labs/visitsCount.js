let visitsCountMap = new WeakMap();

function CountUser(user) {
    let count = visitsCountMap.get(user)|| 0;
    count += 1
    visitsCountMap.set(user, count)
    return count;
}

module.exports = CountUser