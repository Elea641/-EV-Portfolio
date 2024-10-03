import * as dotenv from 'dotenv';
dotenv.config();

export const environment = {
  production: true,
  EMAIL_SERVICE_ID: process.env['EMAIL_SERVICE_ID'],
  EMAIL_TEMPLATE_ID: process.env['EMAIL_TEMPLATE_ID'],
  EMAIL_USER_ID: process.env['EMAIL_USER_ID'],
};
