import dotenv from 'dotenv';

class ConfigServer {
  constructor(filePath: string) {
    dotenv.config({ path: filePath });
  }

  get(key: string): string {
    return process.env[key];
  }

  get cacheable() {
    return this.get('CACHEABLE') === 'true';
  }

  isDevelopmentEnvironment() {
    return this.get('NODE_ENV') === 'development';
  }
}

export const configServer = new ConfigServer(`Environments/${process.env.NODE_ENV}.env`);