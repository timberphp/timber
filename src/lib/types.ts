export type ProjectType = 'local' | 'ssh';

export type Project = {
    id: string;
    path: string;
    type: ProjectType;
    php_binary_path: string;
    host?: string;
    port?: number;
    user?: string;
    private_key_path?: string;
    passpharse?: string;
}