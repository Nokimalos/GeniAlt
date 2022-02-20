import env from 'env-var'

export const env_port = env.get('SERVER_PORT').asPortNumber();
export const env_host = env.get('SERVER_HOST').asString();
export const env_seed = env.get('SEED').default(69).asPortNumber();
