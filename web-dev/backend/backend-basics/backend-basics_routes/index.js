import { server } from "./server.js";

server.listen(8088, () => {
  console.log(`Server running at http://localhost:8088/`);
});
