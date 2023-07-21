import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<void>
) {
  console.log("Get success request" + JSON.stringify(req.body));
  res.status(200).send();
}
