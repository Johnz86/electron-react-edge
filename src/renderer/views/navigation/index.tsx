import * as React from 'react';
import { FileSystem } from '../../components/tree';
import { FilePathInput } from '../../components/input/input';
import { getFiles, getPath, separator, FileDescriptor } from 'common/file-management';
import './styles.css';

interface NavigationState {
  fileList: FileDescriptor[];
  path: string;
  directory: string;
  content: string;
}

class Navigation extends React.Component<{}, NavigationState> {

  constructor(props: {}, context: any) {
    super(props, context);
    this.state = { fileList: [], path: '.', directory: '..', content: '' };
    this.changePath = this.changePath.bind(this);
    this.clickFile = this.clickFile.bind(this);
  }

  public componentWillMount() {
    const target = getPath(this.state.path);
    getFiles(target).then(data =>
      this.setState({ ...this.state, path: target, directory: this.getDirname(target), fileList: data }));
  }

  public changePath(newPath: string) {
    if (newPath) {
      const target = getPath(newPath);
      getFiles(target).then(data =>
        this.setState({ ...this.state, path: target, directory: this.getDirname(target), fileList: data }));
      console.log('changePath', newPath, this.state.directory);
    }
  }

  public clickFile(filePath: string) {
    if (filePath) {
      this.setState({ ...this.state, content: filePath });
    }
  }

  public parentPath = ()  => {
    const pathList = this.state.path.split(separator);
    if (pathList.length > 1) { pathList.pop(); }
    this.changePath(getPath(pathList.join(separator)));
  }

  render() {
    return (
      <div className="c-app">
        <main className="c-app__main">
          <div className="c-app__drawer">
            <FilePathInput path={this.state.path} onPathChanged={this.changePath} />
            <FileSystem fileList={this.state.fileList} path={this.state.directory} onFileClick={this.clickFile} onRootPathClick={this.parentPath} getFiles={getFiles} />
          </div>
          <div className="c-app__content">
            {this.state.content}
          </div>
        </main>
      </div>
    );
  }

  private getDirname(path: string): string {
    let dirn = path.split('\\').slice(-1)[0];
    return dirn ? dirn : path.split('\\').slice(-2)[0];
  }
}

export default Navigation;
