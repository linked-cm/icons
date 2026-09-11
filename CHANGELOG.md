# @\_linked/icons

## 1.0.1

### Patch Changes

- [`f8f0ca4`](https://github.com/linked-cm/icons/commit/f8f0ca432fcc623c9a3618dfc8a7cd7b0c8681ca) Thanks [@flyon](https://github.com/flyon)! - Stop declaring `*.module.css` globally.

  This package has no CSS. The declaration came from the `create-package` template and was
  shipped in `lib/esm/types.d.ts`, where it became a **global ambient declaration in every
  consumer** — so any consumer that legitimately declares `*.module.css` itself (because it does
  have CSS modules and needs them typed) got "Duplicate identifier" and could not build.

  A package should only declare ambient modules it actually uses.
