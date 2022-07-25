import path from 'path';
import { DEFAULT_ENTRY_POINT, DEFAULT_OUTDIR, DEFAULT_TEMPLATE } from './constants';

interface Options {
    cwd: string;
}
export interface AppData {
    paths: {
        cwd: string;
        absSrcPath: string;
        absPagesPath: string;
        absTmpPath: string;
        absOutputPath: string;
        absEntryPath: string;
        absNodeModulesPath: string;
    },
    pkg: any,
}

export const getAppData = ({
    cwd
}: Options) => {
    return new Promise((resolve: (value: AppData) => void, rejects) => {
        const absSrcPath = path.resolve(cwd, 'src');
        const absPagesPath = path.resolve(absSrcPath, 'pages');
        const absNodeModulesPath = path.resolve(cwd, 'node_modules');
        const absTmpPath = path.resolve(absNodeModulesPath, DEFAULT_TEMPLATE);
        const absEntryPath = path.resolve(absTmpPath, DEFAULT_ENTRY_POINT);
        const absOutputPath = path.resolve(cwd, DEFAULT_OUTDIR);

        const paths = {
            cwd,
            absSrcPath,
            absPagesPath,
            absTmpPath,
            absOutputPath,
            absEntryPath,
            absNodeModulesPath
        }
        const pkg = require(path.resolve(cwd, 'package.json'));
        resolve({ paths, pkg });
    });
};

module.exports ={
    getAppData
}