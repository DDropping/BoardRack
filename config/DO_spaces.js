import AWS from 'aws-sdk';
const ENDPOINT = config.get('SpacesEndpoint');
const KEY = config.get('SpacesKey');
const SECRET = config.get('SpacesSecret');

/**
 * Digital Ocean Spaces Connection
 */

const spacesEndPoint = new AWS.Endpoint(ENDPOINT);
const s3 = new AWS.S3({
  endpoint: spacesEndPoint,
  accessKeyId: process.env.KEY,
  secretAccessKey: process.env.SECRET
});
