document.getElementById('saveBtn').addEventListener('click', () => {
  const notes = document.getElementById('notes').value;
  const blob = new Blob([notes], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Notes.txt';
  a.click();
  URL.revokeObjectURL(url);
});