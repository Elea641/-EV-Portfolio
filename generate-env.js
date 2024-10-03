const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: './src/.env' });

const envFileContent = `
export const environment = {
  production: ${process.env.PRODUCTION === 'true'},
  EMAIL_SERVICE_ID: '${process.env.EMAIL_SERVICE_ID}',
  EMAIL_TEMPLATE_ID: '${process.env.EMAIL_TEMPLATE_ID}',
  EMAIL_USER_ID: '${process.env.EMAIL_USER_ID}'
};
`;

const targetPath = path.join(
  __dirname,
  './src/environments/environment.prod.ts'
);

fs.writeFile(targetPath, envFileContent, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Successfully wrote environment variables to ${targetPath}`);
  }
});
