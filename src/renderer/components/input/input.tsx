
import * as React from 'react';
import './bredcrumb.css';

interface FilePathInputState {
  path: string;
  pathSegments: string[];
  edit: boolean;
}

interface FilePathInputProps extends React.HTMLProps<HTMLElement> {
  path: string;
  onPathChanged: (path: string) => void;
}

export class FilePathInput extends React.Component<FilePathInputProps, FilePathInputState> {
  textInput: HTMLInputElement | null;
  constructor(props: FilePathInputProps) {
    super(props);
    this.state = { path: this.props.path, edit: false, pathSegments: this.props.path.split('\\') };
    this.editInput = this.editInput.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.onEscape = this.onEscape.bind(this);
    this.pathChanged = this.pathChanged.bind(this);
    this.textInput = null;
  }

  public componentWillReceiveProps(nextProps: FilePathInputProps) {
    this.setState({ path: nextProps.path, edit: false, pathSegments: nextProps.path.split('\\') });
  }

  public componentDidUpdate() {
    if (this.state.edit && this.textInput) {
      this.textInput.value = this.state.path;
      this.textInput.select();
    }
  }

  public onEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.charCode === 13) {
      this.pathChanged();
    }
  }

  public onEscape(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.keyCode === 27) {
      this.editInput();
    }
  }

  public pathChanged() {
    if (this.state.edit && this.textInput) {
      this.props.onPathChanged(this.textInput.value);
    }
  }

  public editInput() {
    console.log("input");
    this.setState({ ...this.state, edit: !this.state.edit });
  }

  public render() {
    return (
      <div className="c-nav__fileinput">
        {this.state.edit ?
          <input
            type="text"
            className="c-nav__pathinput"
            ref={(input) => { this.textInput = input; }}
            onBlur={this.pathChanged}
            onKeyPress={this.onEnter}
            onKeyUp={this.onEscape}
          /> :
          <div className="c-breadcrumb" onClick={this.editInput}>
            {
              this.state.pathSegments.map((segment, index) => {
                return (<div className="c-breadcrumb__step" key={index}>{segment}</div>);
              })
            }
          </div>}
      </div>
    );
  }
}