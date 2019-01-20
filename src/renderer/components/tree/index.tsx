
import * as React from 'react';
import './tree.css';
import { FileIcon, FolderIcon, OpenFolderIcon } from '../icons';

export interface FileDescriptor {
    ino: number;
    name: string;
    filePath: string;
    isDirectory: boolean;
}

export const Tree = ({ className, children, ...rest }: React.HTMLProps<HTMLUListElement>) => {
    return (<ul className={className ? 't-tree' + className : 't-tree'} {...rest}>{children}</ul>);
};

interface FolderItemProps extends React.HTMLProps<HTMLLIElement> {
    folderName: string;
    root: boolean;
    onClick: (event: React.SyntheticEvent) => void;
}

export const FolderItem = ({ folderName, root, className, onClick, children, ...rest }: Partial<FolderItemProps>) => {
    const css = root ? 't-tree__item--root ' : 't-tree__item ';
    return (
        <li className={className ? css + className : css} {...rest}>
            <div className="t-clip" onClick={onClick}>
                {children ? <OpenFolderIcon className="icon-tree" /> : <FolderIcon className="icon-tree" />} {folderName}
            </div>
            {children ? (<ul className="t-tree">{children}</ul>) : null}
        </li>
    );
};

interface FileItemProps extends React.HTMLProps<HTMLLIElement> {
    fileName: string;
    path: string;
    onFileClick: (file: string) => void;
}

export const FileItem = ({ fileName, className, path, onFileClick, ...rest }: FileItemProps) => {
    return (
        <li className={className ? 't-tree__item ' + className : 't-tree__item'} {...rest} onClick={() => onFileClick(path)}>
            <div className="t-clip">
                <FileIcon className="icon-tree" /> {fileName}
            </div>
        </li>
    );
};

interface FolderBlockProps extends React.HTMLProps<HTMLLIElement> {
    file: FileDescriptor;
    onFileClick: (file: string) => void;
    getFiles: (dir: string) => Promise<FileDescriptor[]>;
}

interface FolderBlockState {
    file: FileDescriptor;
    fileList: FileDescriptor[];
}

export class FolderBlock extends React.Component<FolderBlockProps, FolderBlockState> {

    constructor(props: FolderBlockProps) {
        super(props);
        this.state = { file: this.props.file, fileList: [] };
        this.openFolder = this.openFolder.bind(this);
    }

    public openFolder(event: React.SyntheticEvent) {
        event.stopPropagation();
        if (this.state.fileList.length) {
            this.setState({ ...this.state, fileList: [] });
        } else {
            this.props.getFiles(this.props.file.filePath).then((data: FileDescriptor[]) => this.setState({ ...this.state, fileList: data }));
        }
    }

    public render(): JSX.Element {
        if (this.state.fileList.length) {
            return (
                <FolderItem folderName={this.props.file.name} onClick={this.openFolder}>
                    {this.state.fileList.map((fileItem) => {
                        if (fileItem.isDirectory) {
                            return <FolderBlock key={fileItem.ino} file={fileItem} onFileClick={this.props.onFileClick} getFiles={this.props.getFiles} />;
                        } else {
                            return <FileItem key={fileItem.ino} fileName={fileItem.name} path={fileItem.filePath} onFileClick={this.props.onFileClick} />;
                        }
                    })}
                </FolderItem>
            );
        }
        return (<FolderItem folderName={this.props.file.name} onClick={this.openFolder} />);
    }
}

interface FileSystemProps extends React.HTMLProps<HTMLUListElement> {
    fileList: FileDescriptor[];
    path: string;
    onFileClick: (file: string) => void;
    onRootPathClick: () => void;
    getFiles: (dir: string) => Promise<FileDescriptor[]>;
}

export class FileSystem extends React.Component<FileSystemProps, {}> {
    constructor(props: FileSystemProps) {
        super(props);
    }

    public render() {
        const { fileList, path, onFileClick, getFiles, onRootPathClick, ...rest } = this.props;
        return (
            <Tree {...rest}>
                <FolderItem root={true} folderName={path.length < 3 ? path : " ..."} onClick={onRootPathClick}>
                    {fileList.map((file) => {
                        if (file.isDirectory) {
                            return <FolderBlock key={file.ino} file={file} onFileClick={onFileClick} getFiles={getFiles} />;
                        } else {
                            return <FileItem key={file.ino} fileName={file.name} path={file.filePath} onFileClick={onFileClick} />;
                        }
                    })}
                </FolderItem>
            </Tree>
        );
    }
}