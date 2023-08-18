import AWS from 'aws-sdk';
process.env.AWS_SDK_LOAD_CONFIG = '1';


AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default AWS;