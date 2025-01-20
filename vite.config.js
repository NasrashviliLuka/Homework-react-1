import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//vite.dev/config/
https: export default defineConfig({
  plugins: [react()],
});
// export default defineConfig({
//   resolve: {
//     extensions: [".js", ".jsx"],
//   },
//   esbuild: {
//     loader: "jsx",
//     include: /src\/.*\.jsx?$/,
//     exclude: [],
//   },
// });
