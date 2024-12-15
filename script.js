document.getElementById('askButton').addEventListener('click', async () => {
    const query = document.getElementById('query').value;
    const responseDiv = document.getElementById('response');

    if (!query) {
        responseDiv.innerText = "Silakan masukkan pertanyaan.";
        return;
    }

    responseDiv.innerText = "Memproses...";

    try {
        const response = await fetch('https://api.groq.io/v1/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `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`
            },
            body: JSON.stringify({
                query: query,
                // Tambahkan parameter lain sesuai dengan dokumentasi API
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data); // Tambahkan ini untuk melihat respons di konsol
        responseDiv.innerText = data.result || "Tidak ada jawaban dari AI.";
    } catch (error) {
        console.error("Error details:", error); // Tambahkan ini untuk melihat detail kesalahan di konsol
        responseDiv.innerText = "Terjadi kesalahan: " + error.message;
    }
});
