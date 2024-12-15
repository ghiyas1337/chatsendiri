document.getElementById('askButton').addEventListener('click', async () => {
    const query = document.getElementById('query').value;
    const responseDiv = document.getElementById('response');

    if (!query) {
        responseDiv.innerText = "Silakan masukkan pertanyaan.";
        return;
    }

    responseDiv.innerText = "Memproses...";

    try {
        const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyApgiQZd-Y6wB9ZTQKDRszp_vevEC6-O2E', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                prompt: query,
                // Anda dapat menambahkan parameter lain sesuai dengan dokumentasi API
            }),
        });

        const data = await response.json();
        responseDiv.innerText = data.generatedContent || "Tidak ada jawaban dari AI.";
    } catch (error) {
        responseDiv.innerText = "Terjadi kesalahan: " + error.message;
    }
});
