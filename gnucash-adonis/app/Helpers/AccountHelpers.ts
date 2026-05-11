import Account from '#app/Models/Account'

export async function getParent(item: Account) {
  return String(await realGetParent(item)).substring(5)
}

async function realGetParent(item: Account): Promise<string> {
  if (item?.parent_guid && item.name) {
    //@ts-ignore
    return (await realGetParent(await Account.findBy('guid', item.parent_guid))) + ':' + item.name
  }
  return 'root'
}
