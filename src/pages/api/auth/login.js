import { loginService } from "@/lib/services/login";
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
    const { nik, name, role } = user;
    const { accessToken } = authentication;

    req.session.user = {
      id: response.user.id,
      token: accessToken,
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
