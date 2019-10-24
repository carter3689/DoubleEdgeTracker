import { assert } from './helper';
import { db, stripe } from './config';

export const getUser = async(uid: string) => {
    return await db.collection('boards').doc(uid).get().then(doc => doc.data())
}

export const getCustomer = async(uid:string) => {
    const user = await getUser(uid);
    return assert(user,'stripeCustomerId')
}

export const updateUser = async(uid:string,data:Object) => {
    return await db.collection('board').doc(uid).set(data,{merge:true})
}

export const createCustomer = async(uid:any) => {
    const customer =await stripe.customers.create({
        metadata:{firebaseUID: uid}
    })

    await updateUser(uid, {stripeCustomerId:customer.id})

    return customer
}

export const getOrCreateCustomer = async(uid:string) => {
    const user = await getUser(uid);
    const customerId = user && user.stripeCustomerId;

    if(!customerId){
        return createCustomer(uid);
    } else {
        return stripe.customers.retrieve(customerId);
    }
}