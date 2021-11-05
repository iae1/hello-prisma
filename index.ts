import { PrismaClient } from ".prisma/client";

const prisma = new PrismaClient()

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: 'Alice',
  //     email: 'a@prisma.io',
  //     posts: {
  //       create: { title: 'yoyo world'}
  //     },
  //     profile: {
  //       create: { bio: 'I like turtles' }
  //     }
  //   }
  // })

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true
  //   }
  // })
  // console.log(allUsers)

  const post = await prisma.post.update({
    where: {id: 1},
    data: {published: true}
  })
  console.log(post)
}

main()
  .catch((e) => {throw e})
  .finally(async () => {
    await prisma.$disconnect()
  })