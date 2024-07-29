document.getElementById('resize-button').addEventListener('click', async () => {
  const fileInput = document.getElementById('file-input');
  const files = fileInput.files;
  const width = parseInt(document.getElementById('width-input').value);
  const height = parseInt(document.getElementById('height-input').value);
  const projectName = document.getElementById('project-name').value.trim() || 'NAIRSU Project';

  if (files.length === 0 || isNaN(width) || isNaN(height)) {
    alert('Please select files and enter valid dimensions.');
    return;
  }

  if (files.length > 8000) {
    alert('You can only upload up to 8000 files.');
    return;
  }

  document.getElementById('status').innerText = 'Processing...';
  const zip = new JSZip();

  for (const file of files) {
    const img = new Image();
    img.src = URL.createObjectURL(file);

    await new Promise(resolve => {
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const resizedBlob = await new Promise(resolve => canvas.toBlob(resolve));
        zip.file(file.name, resizedBlob);
        resolve();
      };
    });
  }

  zip.generateAsync({ type: 'blob' }).then(content => {
    document.getElementById('status').innerText = 'Ready to download!';
    const exportButton = document.getElementById('export-button');
    exportButton.style.display = 'inline';
    exportButton.onclick = () => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = `${projectName}.zip`;
      link.click();
    };
  });
});

document.getElementById('theme-switcher').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});


if (screen.width > 500){
  document.body.style.height = '200vh';
}