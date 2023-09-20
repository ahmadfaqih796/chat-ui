import createEmotionCache from "@/createEmotionCache";
import "@/styles/globals.css";

import { ColorModeProvider } from "@/components/theme/ColorModeProvider";
import { AdminLayout, BlankLayout } from "@/layouts";

const clientSideEmotionCache = createEmotionCache();

const layouts = {
  Admin: AdminLayout,
  User: "",
};

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = layouts[Component.layout] || BlankLayout;
  return (
    <Layout>
      {/* <ColorModeProvider>
      </ColorModeProvider> */}
      <Component {...pageProps} />
    </Layout>
  );
}
