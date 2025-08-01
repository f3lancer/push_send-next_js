export type Campaign = {
  _id: string;
  name: string;
  title: string;
  body: string;
  tags: string[];
  click_url: string;
  status: string;
  created_at: string;
  updated_at: string;
};
export type Device = {
  _id: string;
  device_token: string;
  platform: string;
  user_id: string;
  email: string;
  tags: string[];
  undelivered: boolean;
  created_at: string;
  updated_at: string;
};
