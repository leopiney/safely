Safely access properties of any sort of object!

# Requirements

* Node 6.0 or later

# Usage

```
import safe, { either } from 'safely'

const dangerousObject = { data: [{ values: [] }]}

safe(dangerousObject).data[0].values[0].value // returns {}
either(safe(dangerousObject).data[0].values[0].value, 42) // returns 42
```
