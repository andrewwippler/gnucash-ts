import Account from "App/Models/Account";
import { accountsEntity } from "Database/Database";

export async function getParent(item: accountsEntity) {
  if (item?.parent_guid) {
    //@ts-ignore
    return await getParent(await Account.findBy('guid', item.parent_guid))+ ":" + item.name
  }
  return "root"

}
