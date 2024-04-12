function generateSequence() {
    const bish = parseInt(document.getElementById('bishInput').value);
    const bosh = parseInt(document.getElementById('boshInput').value);
    const limit = parseInt(document.getElementById('limitInput').value);

    let output = '';

    for (let i = 1; i <= limit; i++) {
        if (i % bish === 0 && i % bosh === 0) {
            output += "Bish-Bosh, ";
        } else if (i % bish === 0) {
            output += "Bish, ";
        } else if (i % bosh === 0) {
            output += "Bosh, ";
        } else {
            output += i + ', ';
        }
    }

    document.getElementById('output').innerHTML = output.slice(0, -2); // Remove the last comma and space
}