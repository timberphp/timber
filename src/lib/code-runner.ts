import { resolveResource } from "@tauri-apps/api/path";
import { ProjectType } from "./types";
import { encode } from 'js-base64';

export async function makeCommand(projectPath: string, projectType: ProjectType, phpCode: string, shouldEncode: boolean = true) {
    const phpBinary = resolvePhpBinaryPath();
    const chainPath = await resolveChainPath(projectType);
    let code = shouldEncode ? encode(phpCode) : phpCode;

    return [
        phpBinary,
        chainPath,
        'execute',
        `"${code}"`,
        `--target=${projectPath}`,
        shouldEncode ? '--base64' : ''
    ].filter(_ => _).join(' ');
}

export function resolvePhpBinaryPath(): string {
    return 'php';
}

async function resolveChainPath(type: ProjectType = 'local'): Promise<string> {
    if (type === 'local') {
        return await resolveResource('bin/chain.phar');
    }

    if (type === 'ssh') {
        return '/tmp/chain.phar';
    }

    throw new Error('Invalid project type');
}