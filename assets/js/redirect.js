// Redirect all shares to the home page.
if (window.location.href.includes("share")) {
  window.location.href = 'https://spartial.app'; 
}

function onCopyFingerprint() {
    navigator.clipboard.writeText("5C:A9:AD:18:3A:6E:B4:58:9D:75:86:EF:BA:F0:DE:16:F7:97:4C:57");
}

function onCopyRedirectUrl() {
    navigator.clipboard.writeText("spartial://callback");
}

function onCopyPackageID() {
    navigator.clipboard.writeText("com.ruud14.spartial");
}
