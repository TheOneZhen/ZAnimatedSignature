import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/animatedSignature.ts"),
      name: "z-animated-signature",
      fileName: "ZAnimatedSignature",
    },
  },
});
