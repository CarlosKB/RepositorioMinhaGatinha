import React from "react";
import { ThemeProvider, Typography, createTheme, Button } from "@mui/material";
import linda2 from "../components/images/linda3.jpeg";
import linda3 from "../components/images/linda4.jpeg";
import linda5 from "../components/images/linda5.jpeg";
import linda6 from "../components/images/lindas6.jpeg";
import nois from "../components/images/nois.jpeg";
import { MyToast } from "../components/Alerts/swal-mixin";
import Swal from "sweetalert2";

function LendingPage() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#136935",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: [
        'Montserrat',
        'sans-serif'
      ].join(','),
    },
  });

  const handleClick = () => {
    Swal.fire({
      title: "Feliz aniversário, minha princesa",
      text: "Que mulher linda é essa?",
      imageUrl: linda5,
      imageWidth: '80%', // Defina uma largura máxima responsiva
      imageHeight: 'auto', // Mantém a proporção original da imagem
      imageAlt: "PERFEITA"
    });
  };

  
  const handleClick2 = () => {
    Swal.fire({
      title: "EU SOU AMIGO DESSAS BELDADES AI",
      text: "Olha isso, meu deus",
      imageUrl: linda6,
      imageWidth: '80%', // Defina uma largura máxima responsiva
      imageHeight: 'auto', // Mantém a proporção original da imagem
      imageAlt: "PERFEITAS"
    });
  };

  const handleClick3 = () => {
    Swal.fire({
      title: "Amo muito VCSS",
      text: "Vocês são lindas demaissss, amo vcsss",
      imageUrl: nois,
      imageWidth: '80%', // Defina uma largura máxima responsiva
      imageHeight: 'auto', // Mantém a proporção original da imagem
      imageAlt: "PERFEITAS"
    });
  };


  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ padding: "20px" }}>
        {/* BODY */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <div>
              <Typography
                color="black"
                sx={{
                  fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Feliz aniversário, mulher perfeita, Maiara! ❤❤❤❤❤
              </Typography>
              <Typography
                color="black"
                sx={{
                  fontSize: "clamp(0.8rem, 3vw, 1.2rem)",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
               Maiara, és a mais sublime das criaturas, com uma beleza que embeleza até os anjos do céu. Maravilhe-se com a tua própria perfeição! ❤❤
              </Typography>
            </div>
            <img
              src={linda2}
              loading="lazy"
              alt=""
              style={{
                width: "100%",
                maxWidth: "100%",
                marginBottom: "20px",
              }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "20px",
              width: "100%",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            <img
              src={linda3}
              loading="lazy"
              alt="LINDA"
              style={{
                width: "100%",
                maxWidth: "100%",
                marginBottom: "20px",
              }}
            />
            <div>
              <Typography
                color="black"
                sx={{
                  fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Contemple esta mulher perfeita! ❤❤❤
              </Typography>
              <Typography
                color="black"
                sx={{
                  fontSize: "clamp(0.8rem, 3vw, 1.2rem)",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Sua beleza transcende a simples descrição. És a epítome da elegância e da graça. Que a tua beleza seja celebrada sempre e para sempre. ❤
              </Typography>
            </div>
          </div>
          <Button variant="contained" color="primary" onClick={handleClick} style={{ marginTop: "20px" }}>
            Clique aqui
          </Button>
          <Button variant="contained" color="primary" onClick={handleClick2} style={{ marginTop: "20px" }}>
            Lindas
          </Button>
          <Button variant="contained" color="primary" onClick={handleClick3} style={{ marginTop: "20px" }}>
            Nois
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default LendingPage;
