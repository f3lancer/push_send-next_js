export function getDeviceApiEnv() {
  const token = process.env.PUSH_API_TOKEN;
  const url = process.env.NEXT_PUBLIC_API_DEVICES_URL;

  if (!url) throw new Error("url is not defined!");
  if (!token) throw new Error("Token is not defined!");

  return { token, url };
}
