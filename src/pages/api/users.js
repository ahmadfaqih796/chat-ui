import { getUser } from "@/lib/services/users";
import { withSessionRoute } from "@/lib/session/withSession";

async function handler(req, res) {
  const { user: userSession } = req.session;
  if (req.method === "GET") {
    try {
      const { query } = req;
      const response = await getUser(userSession.token, query);
      return res.json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ ok: false, message: error });
    }
  }
}

export default withSessionRoute(handler);
