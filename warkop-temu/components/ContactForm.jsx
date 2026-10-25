"use client";

import { useState } from "react";

/** Form hanya untuk demonstrasi front-end, tidak menyimpan atau mengirim data. */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <div className="contact-form-box">
      <h2>Punya cerita atau pertanyaan?</h2>
      <p>Isi form ini sebagai contoh interaksi website. Belum terhubung ke backend.</p>
      {submitted && <div role="status" className="form-message">Terima kasih! Ini simulasi pengisian form; pesan belum dikirim ke server.</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Nama kamu<input name="nama" type="text" placeholder="Nama lengkap" autoComplete="name" required minLength={2} /></label>
          <label>Email<input name="email" type="email" placeholder="nama@email.com" autoComplete="email" required /></label>
        </div>
        <label>Pesan<textarea name="pesan" rows={5} placeholder="Tulis pesanmu di sini..." required minLength={8} /></label>
        <button type="submit" className="button button-primary">Kirim Pesan (Demo) <span aria-hidden="true">↗</span></button>
      </form>
    </div>
  );
}
