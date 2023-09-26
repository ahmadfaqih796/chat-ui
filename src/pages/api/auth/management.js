import { ManagementService } from "@/lib/services/auth";
import { withSessionRoute } from "@/lib/session/withSession";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { body } = req;
      const response = await ManagementService(body);
      return res.json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        ok: false,
        message: error ?? "Terjadi kesalahan pada server",
      });
    }
  }
}

export default withSessionRoute(handler);
