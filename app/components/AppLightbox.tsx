"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface Props {
  open: boolean;
  index: number;
  slides: { src: string }[];
  onClose: () => void;
}

export default function AppLightbox({ open, index, slides, onClose }: Props) {
  return (
    <Lightbox
      open={open}
      index={index}
      close={onClose}
      slides={slides}
      styles={{ container: { backgroundColor: "rgba(0,0,0,0.95)" } }}
      render={{
        buttonClose: () => (
          <button
            key="close"
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              position: "fixed",
              top: 16,
              right: 16,
              zIndex: 9999,
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(233,30,140,0.9)",
              border: "2px solid rgba(255,255,255,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(233,30,140,0.5)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        ),
      }}
    />
  );
}
