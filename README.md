## Hash's Code Annotations

Files that will need to be added/modified:
- Add file code/api/src/migrations/5-style-to-tables.js
  - This file will be adding a new attribute for user and product. The user will contain an enum while product will contain a set of two numbers for style matching closest to.
- Modify file code/api/src/config/params.json
  - Structure for enum for user
- Modify files code/api/src/modules/user/
  - model.js
  - query.js
  - mutation.js
  - resolver.js
  - types.js
- Modify files code/api/src/modules/product/
  - model.js
  - query.js
  - mutation.js
  - resolver.js
  - types.js