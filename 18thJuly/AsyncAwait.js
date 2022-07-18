function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved slow!')
        }, 2000);
    })
}

function resolveAfter1Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Resolved fast!')
        }, 1000);
    })
}

function syncCall() {
    console.log('calling slow - sync')
    const result = resolveAfter2Seconds();
    console.log(result);
    console.log('End of slow sync call')

    console.log('calling fast - sync')
    const result2 = resolveAfter1Seconds();
    console.log(result);
    console.log('End of fast sync call')
}

async function asyncCall() {
    console.log('calling slow - async')
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log('End of slow async call')

    console.log('calling fast - async')
    const result2 = await resolveAfter1Seconds();
    console.log(result);
    console.log('End of fast async call')
}

function syncCallWithThen() {
    console.log('calling slow - sync with then')
    resolveAfter2Seconds().then(result => {
        console.log(result);
    }) //Then is called after the promise is resolved. Anything after the then call will still run regardless of whether the promise is still pending or not.
    console.log('End of slow sync then call')

    console.log('calling fast - sync with then')
    resolveAfter1Seconds().then(result => {
        console.log(result);
    }) //Then is called after the promise is resolved. Anything after the then call will still run regardless of whether the promise is still pending or not.
    console.log('End of fast sync then call')
}

function syncCallWithThen2() {
    console.log('calling slow - sync with then 2')
    const result = resolveAfter2Seconds();
    result.then(result => {
        console.log(result);
    }) //Then is called after the promise is resolved. Anything after the then call will still run regardless of whether the promise is still pending or not.
    console.log('End of slow sync then 2 call')

    console.log('calling fast - sync with then 2')
    const result2 = resolveAfter1Seconds();
    result2.then(result => {
        console.log(result);
    }) //Then is called after the promise is resolved. Anything after the then call will still run regardless of whether the promise is still pending or not.
    console.log('End of fast sync then 2 call')
}

async function run() {
    syncCall();
    await asyncCall();
    syncCallWithThen();
    syncCallWithThen2();
}

run()