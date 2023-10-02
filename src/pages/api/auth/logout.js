import { withSessionRoute } from "@/lib/session/withSession";

async function logoutRoute(req, res) {
  await req.session.destroy();
  return res.json({ logout: true, message: "Anda berhasil logout" });
}

export default withSessionRoute(logoutRoute);
