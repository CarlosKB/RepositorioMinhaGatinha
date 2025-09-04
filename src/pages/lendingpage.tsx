import {
  ThemeProvider,
  Typography,
  createTheme,
  Button,
} from "@mui/material";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CelebrationIcon from '@mui/icons-material/Celebration';

// Importando as imagens (ajuste se os nomes diferirem)
import img1 from "../components/images/image1.jpg";
import img2 from "../components/images/image2.jpg";
import img3 from "../components/images/image3.jpg";
import img4 from "../components/images/image4.jpg";
import img5 from "../components/images/image5.jpg";
import img6 from "../components/images/image6.jpg";
import img7 from "../components/images/image7.jpg";
import img8 from "../components/images/image8.jpg";
import img9 from "../components/images/image9.jpg";
import img10 from "../components/images/image10.jpg";
import img11 from "../components/images/image11.jpg";
import img12 from "../components/images/image12.jpg";
import img13 from "../components/images/image13.jpg";
import img14 from "../components/images/image14.jpg";
import img15 from "../components/images/image15.jpg";
import img16 from "../components/images/image16.jpg";
import img17 from "../components/images/image17.jpg";
import img18 from "../components/images/image18.jpg";
import img19 from "../components/images/image19.jpg";
import img20 from "../components/images/image20.jpg";
import img21 from "../components/images/image21.jpg";
import img22 from "../components/images/image22.jpg";
import img23 from "../components/images/image23.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function LendingPage() {
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

  // Estado do contador
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isBirthday, setIsBirthday] = useState(false);

  // Data do aniversário
  const birthdayMonth = 8; // Setembro (JS usa 0-11)
  const birthdayDay = 12;

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      let year = now.getFullYear();
      const birthday = new Date(year, birthdayMonth, birthdayDay, 0, 0, 0);

      if (now > birthday) {
        birthday.setFullYear(year + 1);
      }

      const diff = birthday.getTime() - now.getTime(); // <-- corrigido

      const todayBirthday =
        now.getDate() === birthdayDay && now.getMonth() === birthdayMonth;

      setIsBirthday(todayBirthday);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Funções dos botões surpresa
  const handleClick = () => {
    Swal.fire({
      title: "Minha princesa perfeita 💜",
      text: "Você é a melhor coisa da minha vida!",
      imageUrl: img11,
      imageWidth: "80%",
      imageHeight: "auto",
      imageAlt: "Isabela linda",
    });
  };

  const handleClick2 = () => {
    Swal.fire({
      title: "O amor da minha vida 😍",
      text: "Cada detalhe seu me faz me apaixoar mais por você!",
      imageUrl: img4,
      imageWidth: "80%",
      imageHeight: "auto",
      imageAlt: "Linda demais",
    });
  };

  const handleClick3 = () => {
    Swal.fire({
      title: "Nós dois 💜",
      text: "A melhor parte da minha vida é estar ao seu lado!",
      imageUrl: img2,
      imageWidth: "80%",
      imageHeight: "auto",
      imageAlt: "Casal perfeito",
    });
  };

  // Array com todas as imagens para galeria
  const galleryImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23,
  ];

  return (
    <ThemeProvider theme={theme}>
      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#6A0DAD" }}
      >
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            💜 Para Minha Princesa 💜
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#inicio">Início</a></li>
              <li className="nav-item"><a className="nav-link" href="#fotos">Fotos</a></li>
              <li className="nav-item"><a className="nav-link" href="#surpresa">Surpresa</a></li>
              {isBirthday && (<li className="nav-item"><Link className="nav-link" to="/aniversario">Aniversário 🎂</Link></li>)}
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header
        id="inicio"
        className="text-center text-white d-flex align-items-center justify-content-center flex-column"
        style={{
          background: "linear-gradient(135deg, #6A0DAD, #D8BFD8)",
          minHeight: "90vh",
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
            Para minha princesa Isabela 💜
          </Typography>
          <Typography
            sx={{
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              fontWeight: "500",
            }}
          >
            Você é o meu mundo, minha inspiração e minha felicidade.
          </Typography>
        </div>
      </header>
      
      {/* CONTADOR / ANIVERSÁRIO */}
      <section
        id="contador"
        className="d-flex flex-column align-items-center justify-content-center text-center"
        style={{
          background: "linear-gradient(135deg, #6A0DAD, #D8BFD8)",
          color: "white",
          padding: "60px 20px",
        }}
      >
        {!isBirthday ? (
          <>
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "500", mb: 4 }}>
              Faltam exatamente:
            </Typography>
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-3">
              {/* Dias */}
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  padding: "20px 30px",
                  borderRadius: "15px",
                  minWidth: "80px",
                }}
              >
                <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>{timeLeft.days}</Typography>
                <Typography>dias</Typography>
              </div>

              {/* Horas */}
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  padding: "20px 30px",
                  borderRadius: "15px",
                  minWidth: "80px",
                }}
              >
                <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>{timeLeft.hours}</Typography>
                <Typography>horas</Typography>
              </div>

              {/* Minutos */}
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  padding: "20px 30px",
                  borderRadius: "15px",
                  minWidth: "80px",
                }}
              >
                <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>{timeLeft.minutes}</Typography>
                <Typography>minutos</Typography>
              </div>

              {/* Segundos */}
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  padding: "20px 30px",
                  borderRadius: "15px",
                  minWidth: "80px",
                }}
              >
                <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>{timeLeft.seconds}</Typography>
                <Typography>segundos</Typography>
              </div>
            </div>
            <Typography sx={{ fontSize: "1.2rem" }}>para o seu aniversário! 🎉</Typography>
          </>
        ) : (
          <div className="d-flex flex-column align-items-center">
            <CelebrationIcon sx={{ fontSize: 100, color: "#FFD700", mb: 2 }} />
            <Typography sx={{ fontSize: "2.5rem", fontWeight: "bold", mb: 1 }}>
              Feliz Aniversário, minha princesa! 💜🎂
            </Typography>
            <Typography sx={{ fontSize: "1.2rem" }}>
              Que seu dia seja cheio de alegria, amor e momentos inesquecíveis!
            </Typography>
          </div>
        )}
      </section>

      {/* SOBRE NÓS */}
      <section id="sobre" className="py-5 bg-light text-center">
        <div className="container">
          <Typography
            color="primary"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Nossa História 💜
          </Typography>
          <Typography sx={{ maxWidth: "800px", margin: "0 auto" }}>
            Cada momento ao seu lado é um presente que a vida me deu.
            Isabela, você transforma os dias comuns em algo mágico e faz meu coração bater mais forte a cada sorriso seu.
          </Typography>
        </div>
      </section>

      {/* GALERIA */}
      <section id="fotos" className="py-5">
        <div className="container">
          <Typography
            color="primary"
            sx={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Nossa Galeria de Momentos ✨
          </Typography>
          <div className="row g-3">
            {galleryImages.map((img, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <img
                  src={img}
                  alt={`Moment ${index + 1}`}
                  className="img-fluid rounded shadow-sm responsive-img"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SURPRESA */}
      <section
        id="surpresa"
        className="text-center py-5"
        style={{ backgroundColor: "#f7f2fa" }}
      >
        <div className="container">
          <Typography
            color="primary"
            sx={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "30px" }}
          >
            Clique e veja a surpresa! 🎁
          </Typography>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button variant="contained" color="primary" onClick={handleClick}>
              Princesa 💜
            </Button>
            <Button variant="contained" color="primary" onClick={handleClick2}>
              Linda 💜
            </Button>
            <Button variant="contained" color="primary" onClick={handleClick3}>
              Nós 💜
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="text-center text-white py-3"
        style={{ backgroundColor: "#6A0DAD" }}
      >
        <Typography sx={{ fontSize: "1rem" }}>
          Feito com muito 💜 para minha princesa Isabela
        </Typography>
      </footer>
    </ThemeProvider>
  );
}

export default LendingPage;
