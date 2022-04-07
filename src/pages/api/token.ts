import { NextApiRequest, NextApiResponse } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  response.json({ success: process.env.SALEOR_AUTH_TOKEN });
};

export default handler;
