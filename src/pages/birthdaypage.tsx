import React, { useEffect, useRef } from "react";
import { ThemeProvider, Typography, createTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // precisa do JS do bootstrap

// Importe suas imagens (até 23)
import img1 from "../components/images/image1.jpg";
import img2 from "../components/images/image2.jpg";
import img3 from "../components/images/image3.jpg";
import img4 from "../components/images/image4.jpg";
import img5 from "../components/images/image5.jpg";
// ... continue até img23

function BirthdayPage() {
  const theme = createTheme({
    palette: {
      primary: { main: "#6A0DAD" }, // Roxo
      secondary: { main: "#D8BFD8" }, // Lilás
    },
    typography: { fontFamily: ["Montserrat", "sans-serif"].join(",") },
  });

  const navigate = useNavigate();
  const carouselRef = useRef(null);

  // coloque todas as suas imagens neste array
  const images = [img1, img2, img3, img4, img5];

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
            🎉 Feliz Aniversário, minha Princesa Isabela! 💜
          </Typography>
          <Typography sx={{ fontSize: "clamp(1rem, 3vw, 1.3rem)", maxWidth: 900, mx: "auto" }}>
            Hoje celebramos você, que é o meu maior presente. Cada momento contigo é único
            e merece ser lembrado para sempre. 💜✨
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
            Nossos momentos especiais 💜
          </Typography>

          <div id="carouselAniversario" className="carousel slide shadow-lg rounded" ref={carouselRef}>
            {/* Slides */}
            <div className="carousel-inner">
              {images.map((src, i) => (
                <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={i}>
                  <img
                    src={src}
                    alt={`Foto ${i + 1}`}
                    className="d-block w-100"
                    style={{
                      maxHeight: "70vh",
                      objectFit: "cover",
                      borderRadius: "20px",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Controles */}
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
            💜 Isabela 💜
          </Typography>
          <Typography sx={{ fontSize: "1.1rem", maxWidth: 800, mx: "auto" }}>
            Que este novo ciclo seja cheio de alegria, paz, saúde e amor. Obrigado por ser
            minha inspiração e por encher minha vida de luz. Te amo infinitamente! 💜
          </Typography>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default BirthdayPage;
