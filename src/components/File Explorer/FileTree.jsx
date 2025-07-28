import { useState } from "react";
import './FileExplorer.css'

export default function FilesTree({
  data,
  handleDelete,
  handleCreateFile,
  handleCreateFolder,
  level = 0,
  parentPath = "",
}) {
  const [openedFolders, setOpenedFolders] = useState([]);

  const handleOpenFolder = (path) => {
    if (openedFolders.includes(path)) {
      setOpenedFolders((prev) => prev.filter((item) => item !== path));
    } else {
      setOpenedFolders((prev) => [...prev, path]);
    }
  };

  return (
    <div>
      {data.map((item, index) => {
        const currentPath = parentPath
          ? `${parentPath}/${item.name}`
          : item.name;

        return (
          <div
            className="file-item"
            key={`${currentPath}-${index}`}
            style={{ marginLeft: `${level * 20}px` }}
          >
            <div className="file-item-parent">
              <span className="file-item-arrow">
                {item.isFolder && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`file-icons ${
                      openedFolders.includes(currentPath) ? "" : "rotate"
                    }`}
                    onClick={() => handleOpenFolder(currentPath)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                )}
              </span>
              <span style={{ marginRight: "auto" }}>{item.name}</span>

              {item.isFolder && (
                <>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="file-icons"
                      onClick={() => handleCreateFolder(currentPath)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                      />
                    </svg>
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="file-icons"
                      onClick={() => handleCreateFile(currentPath)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                      />
                    </svg>
                  </span>
                </>
              )}
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="file-icons"
                  onClick={() => handleDelete(currentPath)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </span>
            </div>

            {item.isFolder && openedFolders.includes(currentPath) && (
              <FilesTree
                data={item.children}
                handleCreateFolder={handleCreateFolder}
                handleCreateFile={handleCreateFile}
                handleDelete={handleDelete}
                level={level + 1}
                parentPath={currentPath}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
