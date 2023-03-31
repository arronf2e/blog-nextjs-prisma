import {getSession} from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const {title, content} = req.body
  const session = await getSession({req});
  const result = await prisma.post.create({
    data: {
      title,
      content,
      authorId: 'clfvw2exn00022zxhxxbl40qb',
    }
  })
  res.json(result)
}
