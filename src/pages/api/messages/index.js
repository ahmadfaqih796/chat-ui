import { addMessages } from "@/lib/services/messages";
import { withSessionRoute } from "@/lib/session/withSession";

async function handler(req, res) {
  const { user: userSession } = req.session;

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
