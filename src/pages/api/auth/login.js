import { loginService } from "@/lib/services/auth";
import { withSessionRoute } from "@/lib/session/withSession";

async function loginRoute(req, res) {
  try {
    const response = await loginService(req.body);
    if (response.code === 401) {
      return res.json({
        success: false,
        message: response.message,
        code: response.code,
      });
    }
    const { user, authentication } = response;

    req.session.user = {
      id: user.id,
      token: authentication,
    };

    await req.session.save();

    return res.json({
      success: true,
      message: "Berhasil login",
      data: req.session.user,
    });
  } catch (error) {
    console.log(error);
    const e = error.toString();
    if (error?.response) {
      return res.status(500).json(error.response.data);
    }
    return res.status(400).json({
      message: e,
    });
  }
}

export default withSessionRoute(loginRoute);
