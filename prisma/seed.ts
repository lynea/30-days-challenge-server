import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const userOne = await prisma.user.create({
    data: {
      name: "rene",
      email: "rene@30days.io",
      challenges: {
        create: [
          {
            title: " stop smoking",
            description: "no more smokies for me :)",
          },
          {
            title: "databases",
            description:
              " do some awesome backend programming everyday for an hour",
          },
          {
            title: "running",
            description: "run 2 times for an hour every week",
          },
        ],
      },
    },
  });
  console.log("Created new user: ", userOne);

  const userTwo = await prisma.user.create({
    data: {
      name: "seeded one",
      email: "user_one@30days.io",
      challenges: {
        create: {
          title: "become awesome",
          description: "just become awesome",
        },
      },
    },
  });
  console.log("Created new user: ", userTwo);
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
