import { getDataById } from "@/api/res-data/index.js";

export default async function  getTableData() {
  const formData = await getDataById()
  console.log(formData)
  return {
    formData
  }
}