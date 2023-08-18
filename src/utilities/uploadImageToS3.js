import AWS from './awsConfig';

export async function uploadImageToS3(imageFile) {
  const s3 = new AWS.S3();

  const params = {
    Bucket: 'pet-app',
    Key: `${imageFile.name}`,
    Body: imageFile,
    ACL: 'public-read',
  };
  console.log(params)

  try {
    const result = await s3.upload(params).promise();
    return result.Location;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}
