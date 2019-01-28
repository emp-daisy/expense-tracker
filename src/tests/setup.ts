import {
  // createConnection,
  getConnection,
} from "typeorm";

// beforeAll(async () => {
//   // await createConnection(process.env.NODE_ENV || "test");
// });

afterAll(async () => {
  await getConnection().close();
});
