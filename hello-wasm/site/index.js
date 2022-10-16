import("./node_modules/hello-wasm/hello_wasm.js").then((js) => {
  js.greet("WebAssembly with npm");
  let result = js.add(2, 8);
  console.log(result);
});
