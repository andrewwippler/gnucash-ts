import { test } from '@japa/runner'

const json = {
  "commodity_guid": "7d9b71b9de754f95b77daab1f63b264e",
  "currency_guid": "198c44a85c6c43d296998eea66cc5b57",
  "date": "2022-10-26 10:09:00",
  "source": "user:price",
  "type": "transaction",
  "value_num": "958",
  "value_denom": "965"
}

test('can post to prices', async ({ client }) => {

  const response = await client.post('/prices').json(json)

  response.assertBodyContains(json)
  response.assertStatus(200)
})

test('value_num and value_denom must be the same length', async ({ client }) => {

  const newJson = { ...json }
  newJson.value_num = "1234"
  newJson.date = "2022-11-26 10:09:00"
  const response = await client.post('/prices').json(newJson)

  response.assertStatus(422)
  response.assertBodyContains({errors: [{message: "value_num and value_denom must be the same length"}]})
})