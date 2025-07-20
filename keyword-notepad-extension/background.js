chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "saveKeyword",
    title: "Save to Notepad",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info) => {
  if (info.menuItemId === "saveKeyword" && info.selectionText) {
    chrome.storage.local.get({ keywords: [] }, (data) => {
      const updated = [...data.keywords, info.selectionText];
      chrome.storage.local.set({ keywords: updated });
    });
  }
});
