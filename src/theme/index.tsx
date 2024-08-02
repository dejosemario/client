import { ConfigProvider } from "antd";
export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#222831",
          borderRadius: 5,
        },
        components: {
          Button: {
            controlHeight: 45,
            controlOutline: "none",
          },
          Input: {
            controlHeight: 45,
            controlOutline: "none",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
