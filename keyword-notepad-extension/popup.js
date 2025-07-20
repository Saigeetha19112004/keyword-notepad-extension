document.addEventListener('DOMContentLoaded', () => {
  const keywordList = document.getElementById('keywords');
  chrome.storage.local.get({ keywords: [] }, (data) => {
    data.keywords.forEach((kw) => {
      const li = document.createElement('li');
      li.textContent = kw;
      keywordList.appendChild(li);
    });
  });

  document.getElementById('download').addEventListener('click', () => {
    chrome.storage.local.get({ keywords: [] }, (data) => {
      const blob = new Blob([data.keywords.join("\n")], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = "keywords.txt";
      a.click();
      URL.revokeObjectURL(url);
    });
  });
});
