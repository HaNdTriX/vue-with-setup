import { expect, test } from "vitest";
import { withSetup } from "../src";
import { useToggle } from "@vueuse/core";

test("useToggle", () => {
  const [[value, toggle]] = withSetup(() => useToggle());
  expect(value.value).toBe(false);

  toggle();
  expect(value.value).toBe(true);

  toggle();
  expect(value.value).toBe(false);
});
