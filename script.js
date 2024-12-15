document.getElementById('askButton').addEventListener('click', async () => {
    const query = document.getElementById('query').value;
    const responseDiv = document.getElementById('response');

    if (!query) {
        responseDiv.innerText = "Silakan masukkan pertanyaan.";
        return;
    }

    responseDiv.innerText = "Memproses...";

    try {
        const response = await fetch('http://127.0.0.1:8000/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: query }),
        });

        const data = await response.json();
        responseDiv.innerText = data.answer || "Tidak ada jawaban dari AI.";
    } catch (error) {
        responseDiv.innerText = "Terjadi kesalahan: " + error.message;
    }
});
