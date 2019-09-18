import AWS from 'aws-sdk';
import { SpacesEndpoint, SpacesKey, SpacesSecret } from './default.json';

/**
 * Digital Ocean Spaces Connection
 */

const spacesEndPoint = new AWS.Endpoint();
