import { addMessages, getMessages } from "@/lib/services/messages";
import { withSessionRoute } from "@/lib/session/withSession";

async function handler(req, res) {
  const { user: userSession } = req.session;

  if (req.method === "GET") {
    try {
      const { query } = req;
      const response = await getMessages(userSession.token, query);
      return res.json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ ok: false });
    }
  }

  if (req.method === "POST") {
    try {
      const { body } = req;
      const response = await addMessages(body, userSession.token);
      return res.json({
        message: "berhasil menambahkan pesan",
        response,
      });
    } catch (error) {
      return res.status(500).json({ ok: false, message: error });
    }
  }
}

export default withSessionRoute(handler);
