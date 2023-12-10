const information = document.getElementById("info");
information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;

const communicate = async () => {
  const response = await window.versions.ping();
  // This feature is not working for some reason...
  console.log(response); // prints out 'pong'
};

communicate();
