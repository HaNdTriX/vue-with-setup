import { expect, test } from "vitest";
import { withSetup } from "../src";
import useIsMounted from "./examples/useIsMounted";

test("useIsMounted", () => {
  const [result] = withSetup(() => useIsMounted());
  expect(result.value).toBe(true);
});
