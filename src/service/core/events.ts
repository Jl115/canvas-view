import MyPlugin from "@/main";

export const registerEvents = (plugin: MyPlugin) => {
  // Register a global DOM event
  plugin.registerDomEvent(document, "click", (evt: MouseEvent) => {
    console.log("click", evt);
  });

  // Register an interval
  plugin.registerInterval(
    window.setInterval(() => console.log("setInterval"), 5 * 60 * 1000),
  );

  // Example of registering a worker thread
  // plugin.register((() => {
  //     const worker = createWorker("Mike")
  //     worker.onmessage = (event) => {
  //         console.log(event.data)
  //     }
  //
  //     return () => {
  //         worker.terminate()
  //     }
  // })())
};
