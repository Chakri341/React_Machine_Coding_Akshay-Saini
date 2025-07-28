import React, { useState } from 'react';
import './FileExplorer.css'
import { fileSystem } from './file-data';
import FilesTree from './FileTree';

const FileExplorer = () =>{
  const [data, setData] = useState(fileSystem);
  const [showCreateItem, setShowCreateItem] = useState({});
  const [fileName, setFileName] = useState("");

  const handleCreateFolder = (path) => {
    setShowCreateItem({ show: true, type: "Folder", src: path });
    console.log("create folder ==> ", path);
  };

  const handleCreateFile = (path) => {
    setShowCreateItem({ show: true, type: "File", src: path });
    console.log("create file ==> ", path);
  };

  const handleDelete = (targetPath) => {
    const deleteFromTree = (tree, currentPath = "") => {
      return tree
        .filter((item) => {
          const itemPath = currentPath
            ? `${currentPath}/${item.name}`
            : item.name;
          return itemPath !== targetPath;
        })
        .map((item) => {
          const itemPath = currentPath
            ? `${currentPath}/${item.name}`
            : item.name;
          if (item.isFolder && item.children.length > 0) {
            return {
              ...item,
              children: deleteFromTree(item.children, itemPath),
            };
          }
          return item;
        });
    };

    setData((prev) => deleteFromTree(prev));
    console.log("Deleted ==> ", targetPath);
  };

  const addItemToTree = (tree, targetPath, newItem, currentPath = "") => {
    return tree.map((node) => {
      const nodePath = currentPath ? `${currentPath}/${node.name}` : node.name;

      if (nodePath === targetPath && node.isFolder) {
        return {
          ...node,
          children: [...node.children, newItem],
        };
      }

      if (node.isFolder && node.children.length > 0) {
        return {
          ...node,
          children: addItemToTree(node.children, targetPath, newItem, nodePath),
        };
      }

      return node;
    });
  };

  const handleAddItem = () => {
    if (!fileName.trim()) return;

    const newItem = {
      name: fileName.trim(),
      isFolder: showCreateItem.type === "Folder",
      children: [],
    };

    setData((prev) => addItemToTree(prev, showCreateItem.src, newItem));
    setFileName("");
    setShowCreateItem({ show: false, type: "", src: "" });
  };

  const handleCancel = () => {
    console.log("handleCancel ==> ");
    setShowCreateItem({ show: false, type: "", src: "" });
  };

  return (
    <div className="files-main-conatiner">
      <div className="files-header">
        <h1>File Manager</h1>
      </div>
      <div className="files-tree-container">
        <FilesTree
          data={data}
          handleCreateFolder={handleCreateFolder}
          handleCreateFile={handleCreateFile}
          handleDelete={handleDelete}
        />
      </div>

      {showCreateItem.show && (
        <div className="create-file">
          <h4>
            Add a New {showCreateItem.type} in {showCreateItem.src}
          </h4>
          <div className="files-input-container">
            <input
              type="text"
              name="fileName"
              className="files-input"
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
            />
          </div>
          <div className="files-btn-container">
            <button type="button" className="file-btns" onClick={handleAddItem}>
              Add
            </button>
            <button type="button" className="file-btns" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}


export default FileExplorer;