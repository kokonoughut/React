// const { object, string, number, date, InferType } = require("yup");
import { object, string, number, date } from "yup";

export const stockSchema = object({
  securityId: string().required("Securtiy Id chaahinxa!"),
  securityName: string().required("Name  chaahinxa!"),
  symbol: string().required("Symbol chaahinxa!"),
  //   totalTradedQuantity: number().default(() => 0),
  //   lastTradedPrice: number().required().positive(),
});
// module.exports = { stockSchema };
// export { stockSchema };
// export default stockSchema;
