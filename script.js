document.getElementById('askButton').addEventListener('click', async () => {
  const query = document.getElementById('query').value;
  const responseDiv = document.getElementById('response');

  if (!query) {
    responseDiv.innerText = "Silakan masukkan pertanyaan.";
    return;
  }

  responseDiv.innerText = "Memproses...";

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
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
      const errorData = await response.json(); // Ambil data kesalahan dari respons
      throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message || 'Unknown error'}`);
    }

    const data = await response.json();
    console.log(data); // Tambahkan ini untuk melihat respons di konsol
    responseDiv.innerText = data.result || "Tidak ada jawaban dari AI.";
  } catch (error) {
    console.error("Error details:", error); // Tambahkan ini untuk melihat detail kesalahan di konsol
    responseDiv.innerText = "Terjadi kesalahan: " + error.message;

    // Log the error to the console
    console.error("Error:", error);

    // Log the request and response to the console
    console.log("Request:", {
      method: 'POST',
      url: 'https://api.groq.com/openai/v1/chat/completions',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `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`
      },
      body: JSON.stringify({
        query: query,
        // Tambahkan parameter lain sesuai dengan dokumentasi API
      }),
    });

    console.log("Response:", response);
  }
});
