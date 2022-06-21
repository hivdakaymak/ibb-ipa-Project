export const EKLE = "ekle";

export const etkinlikEkle = (text) => {
  return { type: EKLE, payload: text };
};

