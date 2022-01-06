const { createProxyMiddleware } = import("http-proxy-middleware");

export default function (app) {
  app.use(
    createProxyMiddleware(["/api", "/otherApi"], {
      target: "http://localhost:5000",
    })
  );
}
