import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import challengeRouter from "./routes/challengeRoutes";
import userRouter from "./routes/userRoutes";

const prisma = new PrismaClient();
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("tiny"));

// REST routes
app.use("/challenges", challengeRouter);
app.use("/users", userRouter);

// app.put("/post/publish/:id", async (req, res) => {
//   const { id } = req.params;
//   const post = await prisma.challenge.update({
//     where: { id: Number(id) },
//     data: {},
//   });
//   res.json(post);
// });

const startServer = async () => {
  app.listen(3002, () =>
    console.log("Ready to rock & roll on => http://localhost:3002")
  );
};

export default startServer;
