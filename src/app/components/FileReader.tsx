import React, { useState } from "react"; // 1. Import useState
import { FileReaderService } from "../service/FileReaderService";

const FileReader = () => {
  const fileReaderService = new FileReaderService();

  const [fileContent, setFileContent] = useState("");

  const readFile = async () => {
    const content =
      (await fileReaderService.readActiveFile()) || "No active file.";

    setFileContent(content);
  };

  return (
    <div>
      <h2>File Reader Component</h2>
      <button onClick={() => readFile()}>Read Active File</button>
      <pre>{fileContent}</pre>
    </div>
  );
};

export default FileReader;
