import { fileURLToPath } from "url";
import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    exclude: [...configDefaults.exclude],
    setupFiles: fileURLToPath(
      new URL("./src/testUtils/setup.ts", import.meta.url)
    ),
    include: [...configDefaults.include, "**/*.test.tsx", "**/*.test.ts"],
    alias: { "~": fileURLToPath(new URL("./src", import.meta.url)) },
    coverage: {
      reporter: ["lcov", "html", "text"],
      exclude: ["**/*.stories.tsx"],
    },
  },
});
