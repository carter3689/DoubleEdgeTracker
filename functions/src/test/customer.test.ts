import { fun } from './test-config';

fun.cleanup;

import { getUser, updateUser, getOrCreateCustomer } from '../customers';

let user: any;

beforeAll( async () => {
    user = { uid:Date.now().toString(), email:'string@gmail.com'}
    await updateUser(user.uid,user)
})

test('getOrCreateCustomer creates/retireves a Stripe Customer', async () => {
    const cust = await getOrCreateCustomer(user.uid);

    expect(cust.id).toContain('cus_')
    expect(cust.metadata.firebaseUID).toEqual(user.uid)

    const userDoc = await getUser(user.uid)

    expect(userDoc.stripeCustomerId).toContain('cus_')
})