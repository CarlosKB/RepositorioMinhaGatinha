import React, { useEffect, useRef } from "react";
import { ThemeProvider, Typography, createTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import img1 from "../components/images/image1.jpg";
import img2 from "../components/images/image2.jpg";
import img3 from "../components/images/image3.jpg";
import img4 from "../components/images/image4.jpg";
import img5 from "../components/images/image5.jpg";

function BirthdayPage() {
  const theme = createTheme({
    palette: {
      primary: { main: "#6A0DAD" },
      secondary: { main: "#D8BFD8" },
    },
    typography: { fontFamily: ["Montserrat", "sans-serif"].join(",") },
  });

  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const images = [img1, img2, img3, img4, img5];

  const launchConfetti = () => {
    // várias explosões rápidas
    const duration = 2000; // 0.8s
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 40, spread: 360, ticks: 60, zIndex: 9999 };

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 80 * (timeLeft / duration); // vai diminuindo
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2, // explode mais para cima
        },
      });
    }, 100);
  };

  // Balões 🎈 (simulados como partículas grandes que sobem devagar)
  const launchBalloons = () => {
    for (let i = 0; i < 6; i++) {
      confetti({
        particleCount: 10,
        startVelocity: 100,
        ticks: 50,
        gravity: -0.2, // sobe em vez de cair
        origin: { x: Math.random(), y: 1.2 },
        shapes: ["star"],
        scalar: 2, // tamanho grande
        colors: ["#ff99ff"], // cores de balões
      });
    }
  };

  useEffect(() => {
    // dispara confete + balões na entrada
    launchConfetti();
    launchBalloons();

    // repete a cada 10s
    const interval = setInterval(() => {
      launchConfetti();
      launchBalloons();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {/* HERO */}
      <header
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #6A0DAD, #D8BFD8)",
          minHeight: "60vh",
          padding: "40px 20px",
        }}
      >
        <div className="container">
          <Typography sx={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", fontWeight: "bold", mb: 2 }}>
            💜🎉 Feliz Aniversário, minha Princesa! 🎉💜
          </Typography>
          <Typography sx={{ fontSize: "clamp(1rem, 3vw, 1.3rem)", maxWidth: 900, mx: "auto" }}>
            Hoje é o seu dia, que é o meu maior presente. Cada momento com você é único para mim. Eu te amo para sempre. 💜✨
          </Typography>

          <div className="mt-4">
            <Button variant="contained" color="secondary" onClick={() => navigate(-1)}>
              ⬅ Voltar
            </Button>
          </div>
        </div>
      </header>

      {/* CARROSSEL */}
      <section className="py-5 bg-light">
        <div className="container">
          <Typography
            color="primary"
            sx={{
              fontSize: "2.2rem",
              fontWeight: "bold",
              textAlign: "center",
              mb: 4,
            }}
          >
            Alguns momentos nossos 💜
          </Typography>

          <div
            id="carouselAniversario"
            className="carousel slide shadow-lg rounded overflow-hidden"
            ref={carouselRef}
          >
            <div className="carousel-inner">
              {images.map((src, i) => (
                <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#f0f0f0",
                      minHeight: "50vh",
                      padding: "20px",
                    }}
                  >
                    <img
                      src={src}
                      alt={`Foto ${i + 1}`}
                      style={{
                        maxHeight: "60vh",
                        maxWidth: "100%",
                        width: "auto",
                        height: "auto",
                        borderRadius: "15px",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselAniversario"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselAniversario"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon bg-dark rounded-circle p-3" aria-hidden="true"></span>
              <span className="visually-hidden">Próximo</span>
            </button>
          </div>
        </div>
      </section>

      {/* MENSAGEM FINAL */}
      <section
        className="text-center text-white py-5"
        style={{ background: "linear-gradient(135deg, #D8BFD8, #6A0DAD)" }}
      >
        <div className="container">
          <Typography sx={{ fontSize: "2rem", fontWeight: "bold", mb: 2 }}>
            💜 Bela 💜
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", maxWidth: 800, mx: "auto" }}>
            Quero estar com você, meu amor, em todos os seus momentos, sejam eles tristes ou felizes. Você faz meus dias melhores.
            Eu amo amar você, amo estar com você e amo fazer tudo por você. Eu te amo a cada detalhe seu e tenho muito orgulho de você, minha princesa.
            Quero estar com você sempre e para sempre. Te amo, meu amor.
          </Typography>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default BirthdayPage;
