import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const globalObj = globalThis as unknown as { process?: { env: Record<string, string | undefined> } };
        const env = globalObj.process?.env || {};

        super(String(env.API_URL || ''), {
            apiKey: String(env.API_KEY || ''),
        });
    }
}

export default AppLoader;
