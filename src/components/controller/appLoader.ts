import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const env =
            (globalThis as unknown as { process?: { env: { [key: string]: string | undefined } } }).process?.env || {};

        super(env.API_URL || '', {
            apiKey: env.API_KEY || '',
        });
    }
}

export default AppLoader;
