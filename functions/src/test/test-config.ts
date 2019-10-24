import * as TestFunctions  from 'firebase-functions-test';

const firebaseConfig = {
    apiKey: "AIzaSyA9UqJG_vGPyCpLR_k_WkDZv6h4sGAmEB8",
    authDomain: "doubleedgetracker.firebaseapp.com",
    databaseURL: "https://doubleedgetracker.firebaseio.com",
    projectId: "doubleedgetracker",
    storageBucket: "doubleedgetracker.appspot.com",
}

const envConfig = { stripe: { secret: 'sk_live_xS1RU2el0Wgc3kxk1P474DBg'}}

const fun = TestFunctions(firebaseConfig,'serviceaccount.json')

fun.mockConfig(envConfig)

export { fun };