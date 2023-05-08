import React, { useRef, useEffect } from "react";

import piece from "../_data/piece.json";

const Game = () => {
  // Referecnias de los elememtos HTML
  const containerCanvasRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Colores del tablero de ajedrez
    const oscure = "#606060";
    const light = "#F5E7DB";

    // Creación del contexto 2D
    const containerCanvas = containerCanvasRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Función para actualizar las dimensiones del canvas
    const updateCanvasDimensions = () => {
      // Dimenciones del tablero de ajedrez
      const tableroWidth = containerCanvas.offsetWidth;
      const pieceWidth = tableroWidth / 10;
      const countTablero = 5;

      containerCanvas.style.height = `${tableroWidth}px`;

      canvas.width = tableroWidth;
      canvas.height = tableroWidth;

      // Dibujo del tablero de ajedrez

      for (let i = 0; i < countTablero; i++) {
        for (let j = 0; j < countTablero; j++) {
          // Rectangulos oscuros
          ctx.fillStyle = oscure;

          if (i > 0 && j < countTablero - 1) {
            const top = pieceWidth * i * 2;
            const left = pieceWidth + pieceWidth * j * 2;

            ctx.fillRect(top, left, pieceWidth, pieceWidth);
          }

          if (i < countTablero - 1 && j > 0) {
            const top = pieceWidth + pieceWidth * i * 2;
            const left = pieceWidth * j * 2;

            ctx.fillRect(top, left, pieceWidth, pieceWidth);
          }

          // Rectangulos claros
          ctx.fillStyle = light;

          if (i < countTablero - 1 && j < countTablero - 1) {
            const top = pieceWidth + pieceWidth * i * 2;
            const left = pieceWidth + pieceWidth * j * 2;

            ctx.fillRect(top, left, pieceWidth, pieceWidth);
          }

          if (i > 0 && j > 0) {
            const top = pieceWidth * i * 2;
            const left = pieceWidth * j * 2;

            ctx.fillRect(top, left, pieceWidth, pieceWidth);
          }
        }
      }

      // Dibujar el borde del tablero de ajedrez

      ctx.strokeStyle = oscure;
      ctx.strokeRect(pieceWidth, pieceWidth, tableroWidth - 2 * pieceWidth, tableroWidth - 2 * pieceWidth);

      // Coordenadas del tablero de ajedrez

      const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

      ctx.fillStyle = oscure;
      ctx.font = "16px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      letters.forEach((item, index) => {
        ctx.fillText(item, pieceWidth + pieceWidth / 2 + pieceWidth * index, pieceWidth / 2);
        ctx.fillText(item, pieceWidth + pieceWidth / 2 + pieceWidth * index, tableroWidth - pieceWidth / 2);

        ctx.fillText(index + 1, pieceWidth / 2, pieceWidth + pieceWidth / 2 + pieceWidth * index);
        ctx.fillText(index + 1, tableroWidth - pieceWidth / 2, pieceWidth + pieceWidth / 2 + pieceWidth * index);
      });

      // Colocando las piezas de ajedrez en el tablero

      piece.forEach((element, i) => {
        element.forEach((item, j) => {
          const file = `${item.piece}_${item.color}.png`;
          const image = new URL(`../assets/parts/${file}`, import.meta.url).pathname;

          const img = new Image();
          img.src = image;

          img.onload = () => {
            const width = img.width * pieceWidth * 0.004;
            const height = img.height * pieceWidth * 0.004;

            const top = pieceWidth + pieceWidth * j + pieceWidth / 5;
            const left = pieceWidth + pieceWidth + pieceWidth * i - height;

            ctx.drawImage(img, top, left, width, height);
          };
        });
      });
    };

    // Inicialización del canvas
    updateCanvasDimensions();

    // Agregar listener de evento "resize"
    window.addEventListener("resize", updateCanvasDimensions);

    // Función de limpieza del efecto
    return () => {
      window.removeEventListener("resize", updateCanvasDimensions);
    };
  }, []);

  return (
    <section className="game" ref={containerCanvasRef}>
      <canvas ref={canvasRef} />
    </section>
  );
};

export default Game;
