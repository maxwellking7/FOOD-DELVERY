import { schemaTypes } from "@sanity/schema";
import { createSchema } from "part:@sanity/base/schema-creator";
import category from "./category";
import restaurant from "./Restaurant";
import dish from "./dishes";
import featured from "./featured";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([restaurant, category, dish, featured]),
});
