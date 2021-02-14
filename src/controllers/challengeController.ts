import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  const posts = await prisma.challenge.findMany({
    include: { owner: true },
  });
  res.json(posts);
};

// get challenges with specific id
export const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const challenges = await prisma.challenge.findMany({
      where: { ownerId: Number(id) },
    });
    if (challenges.length > 0) {
      console.log(challenge);
      res.json(challenges);
    } else {
      throw new Error("no user found");
    }
  } catch (error) {
    res.status(400).send({
      message: "This is an error!",
    });
  }
};

export const create = async (req: Request, res: Response) => {
  const { title, description, authorEmail, endDate } = req.body;
  try {
    const result = await prisma.challenge.create({
      data: {
        title,
        description,
        endDate,
        owner: { connect: { email: authorEmail } },
      },
    });
    console.log(endDate);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

// a put req to /challenges/update/id
export const upDateById = async (req: Request, res: Response) => {
  console.log("hitting controller");
  const { id, date } = req.body;
  try {
    const result = await prisma.challenge.update({
      where: { id: Number(id) },
      data: {
        daysCompleted: date,
      },
    });
    if (result) {
      res.json(result);
    } else {
      throw new Error("test");
    }
  } catch (error) {
    res.send(" oops something went wrong");
  }
};

// export const remove = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   try {
//     const post = await prisma.challenge.delete({
//       where: { id: Number(id) },
//     });
//     res.json(post);
//   } catch (error) {
//     res.send(`could not delete challenge with id ${id}`);
//   }
// };

export const challenge = {
  upDateById,
  create,
  getAll,
  getById,
};
