import { onTestFinished } from "vitest";
import { createApp, type App } from "vue";

export type WithSetupOptions = {
  /**
   * A callback to configure the Vue app before mounting.
   */
  configureApp?: (app: App<Element>) => void;
};

/**
 * Helper to test a composable with a Vue app context.
 * The app can be configured via the `configureApp` callback.
 * The app is unmounted automatically when the test is finished.
 */
export function withSetup<T>(
  /**
   * The composable to test
   */
  composable: () => T,
  /**
   * Options to configure the app
   */
  options?: WithSetupOptions
): [T, App<Element>] {
  let result: T | undefined = undefined;

  const app = createApp({
    setup() {
      result = composable();
      return () => {};
    },
  });

  options?.configureApp?.(app);

  const root = document.createElement("div");
  app.mount(root);

  onTestFinished(() => {
    try {
      app.unmount();
    } catch {
      // Ignore unmount errors
    }
  });

  return [result as T, app];
}
