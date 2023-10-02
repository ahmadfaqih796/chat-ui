import { loginService } from "@/lib/services/auth";
import { withSessionRoute } from "@/lib/session/withSession";

async function loginRoute(req, res) {
  try {
    const response = await loginService(req.body);

    const { name } = response.user;

    req.session.user = {
      id: response.user.id,
      name: name,
      token: response.accessToken,
    };

    await req.session.save();

    return res.json({
      success: true,
      message: "Berhasil login",
      name: name,
    });
  } catch (error) {
    console.log(error);
    const e = error.toString();

    // handle error from api with response api
    if (error?.response) {
      return res.status(500).json(error.response.data);
    }
    //  handle if error job level === 1 or job level === staff
    return res.status(400).json({
      message: e,
    });
  }
}

export default withSessionRoute(loginRoute);
