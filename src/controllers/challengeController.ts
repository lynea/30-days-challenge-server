import { createUser } from "./userControllers";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { Request, Response } from "express";

export const getAllChallenges = async (req: Request, res: Response) => {
  const posts = await prisma.challenge.findMany({
    include: { owner: true },
  });
  res.json(posts);
};

// get challenges with specific id
export const getChallengesById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.challenge.findMany({
    where: { ownerId: Number(id) },
  });
  res.json(post);
};

export const createChallenge = async (req: Request, res: Response) => {
  const { title, description, authorEmail } = req.body;
  const result = await prisma.challenge.create({
    data: {
      title,
      description,
      owner: { connect: { email: authorEmail } },
    },
  });
  res.json(result);
};

export const deleteChallenge = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await prisma.challenge.delete({
      where: { id: Number(id) },
    });
    res.json(post);
  } catch (error) {
    res.send(`could not delete challenge with id ${id}`);
  }
};
