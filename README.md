# vue-with-setup

A vitest utility to use Vue 3 composables in tests without mounting a component.

## Install

```bash
npm install vue-with-setup --save-dev
```

## Usage

### Basic Example

```ts
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { withSetup } from "vue-with-setup";
import { useToggle } from "@vueuse/core";

test("useToggle", () => {
  const [[value, toggle]] = withSetup(() => useToggle());
  expect(value.value).toBe(false);

  toggle();
  expect(value.value).toBe(true);

  toggle();
  expect(value.value).toBe(false);
});
```

### With App Context

```ts
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import { withSetup } from "vue-with-setup";

test("useToggle", () => {
  const [result, app] = withSetup(() => useMyComposable(), {
    configureApp(app) {
      // provide app context here
      app.use(SomePlugin);
    },
  });
  ...
});
```

## Development

- Install dependencies:

```bash
pnpm install
```

- Run the playground:

```bash
pnpm run playground
```

- Run the unit tests:

```bash
pnpm run test
```

- Build the library:

```bash
pnpm run build
```
