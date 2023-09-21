import createEmotionCache from "@/createEmotionCache";
import "@/styles/globals.css";

import { ColorModeProvider } from "@/components/theme/ColorModeProvider";
import { AdminLayout, BlankLayout } from "@/layouts";
import UserLayout from "@/layouts/UserLayout";

const clientSideEmotionCache = createEmotionCache();

const layouts = {
  Admin: AdminLayout,
  User: UserLayout,
};

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = layouts[Component.layout] || BlankLayout;
  return (
    <ColorModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ColorModeProvider>
  );
}
