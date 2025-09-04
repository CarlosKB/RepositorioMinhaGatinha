import { ThemeProvider, Typography, createTheme } from "@mui/material";
import linda5 from "../components/images/image3.jpg";
import linda6 from "../components/images/image4.jpg";
import nois from "../components/images/image5.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function BirthdayPage() {
  // Tema personalizado
  const theme = createTheme({
    palette: {
      primary: {
        main: "#6A0DAD", // Roxo
      },
      secondary: {
        main: "#D8BFD8", // Lilás
      },
    },
    typography: {
      fontFamily: ["Montserrat", "sans-serif"].join(","),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* HERO */}
      <header
        className="text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background: "linear-gradient(135deg, #6A0DAD, #D8BFD8)",
          minHeight: "80vh",
        }}
      >
        <div>
          <Typography
            sx={{
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            🎉 Feliz Aniversário, minha Princesa Isabela! 💜
          </Typography>
          <Typography
            sx={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              fontWeight: "500",
            }}
          >
            Hoje celebramos a vida da mulher mais perfeita do universo!
          </Typography>
        </div>
      </header>

      {/* CARROSSEL DE FOTOS */}
      <section className="py-5 bg-light">
        <div className="container">
          <Typography
            color="primary"
            sx={{
              fontSize: "2.2rem",
              fontWeight: "bold",
              marginBottom: "30px",
              textAlign: "center",
            }}
          >
            Momentos especiais 💜
          </Typography>

          <div id="carouselAniversario" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active text-center">
                <img
                  src={linda5}
                  className="d-block mx-auto img-fluid rounded shadow-lg"
                  alt="Foto 1"
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item text-center">
                <img
                  src={linda6}
                  className="d-block mx-auto img-fluid rounded shadow-lg"
                  alt="Foto 2"
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
              </div>
              <div className="carousel-item text-center">
                <img
                  src={nois}
                  className="d-block mx-auto img-fluid rounded shadow-lg"
                  alt="Foto 3"
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Controles do carrossel */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselAniversario"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselAniversario"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
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
          <Typography
            sx={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "15px" }}
          >
            💜 Isabela, minha princesa 💜
          </Typography>
          <Typography sx={{ fontSize: "1.2rem", maxWidth: "700px", margin: "0 auto" }}>
            Que seu aniversário seja apenas o começo de um ano incrível, cheio de amor, 
            alegria e conquistas. Obrigado por ser a razão dos meus sorrisos todos os dias.  
            Te amo infinitamente! 💜✨
          </Typography>
        </div>
      </section>
    </ThemeProvider>
  );
}

export default BirthdayPage;
