import assert from "assert";
import safe, { either } from "./index";

let obj = { data: [{ values: [{ value: 42 }] }] };
assert.equal(safe(obj).data[0].values[0].value, 42);

obj = { data: [{ values: [] }] };
assert.equal(either(safe(obj).data[0].values[0].value, 21), 21);

obj = { data: [{ values: [{ value: 42 }] }] };
assert.equal(
  either(safe(obj).data[0].values[0].value, "This is not the expected result"),
  42
);

console.log("OK");
