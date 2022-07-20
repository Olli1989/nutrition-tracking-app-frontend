export default function getFormatedDate(date){
  return`${date.getUTCDate()}.${date.getUTCMonth()+1}.${date.getUTCFullYear()}`
}