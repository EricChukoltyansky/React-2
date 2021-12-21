import React from "react";

class CustomTextArea extends React.Component {
  state = {
    isCopied: false,
  };

  textInput = React.createRef();

  // copyTextToClipboard = async (text) => {
  //   // const el = this.textInput;
  //   if (el) {
  //     return await navigator.clipboard.writeText(text);
  //   } else {
  //     return document.execCommand("copy", true, text);
  //   }
  // };

  handleCopyClick = () => {
    this.copyTextToClipboard()
      .then(() => {
        this.setState({
          isCopied: true,
        });
        setTimeout(() => {
          this.setState({
            isCopied: false,
          });
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <textarea type="text" ref={this.textInput} value="copy this" readOnly />
        <button onClick={() => this.handleCopyClick()}>
          Copy to Clipboard
        </button>
      </div>
    );
  }
}

export default CustomTextArea;
