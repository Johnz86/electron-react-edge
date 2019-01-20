import * as fs from 'fs';
import { resolve, sep } from 'path';

/*  File Management 
    This is an abstraction of access to file system layer. 
    You should not use directly the API, because it may change in time
    or you decide to use some library isntead of native solution   
*/

export interface FileDescriptor {
    ino: number;
    name: string;
    filePath: string;
    isDirectory: boolean;
}

export const getPath = resolve;
export const separator = sep;

export const getFiles = async (dir: string): Promise<FileDescriptor[]> => {
    const fileNames = await readDir(dir);
    return await Promise.all(fileNames.map((fileName, index) => {
        return readStat(dir, fileName, index);
    })).then(files => files.sort((a, b) => (a.isDirectory === b.isDirectory) ? 0 : a.isDirectory ? -1 : 1));
};

const readDir = (dir: string): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        fs.readdir(dir, (error, files) => {
            if (error) {
                reject(error);
            } else {
                resolve(files);
            }
        })
    });
}

const readStat = (dir: string, fileName: string, index: number): Promise<FileDescriptor> => {
    const path = resolve(dir, fileName);
    return new Promise((resolve, reject) => {
        fs.stat(path, (error, stats) => {
            if (error) {
                resolve({ ino: index, name: fileName, filePath: path, isDirectory: false });
            } else {
                resolve({ ino: stats.ino, name: fileName, filePath: path, isDirectory: !stats.isFile() });
            }
        })
    });
};