const BASE_URL = "http://localhost:8080/api/cards/";

export const getRandomCard = (setState) =>
  fetch(BASE_URL + "random")
    .then((res) => res.json())
    .then((data) => {
      setState(data);
    });

export const saveCard = (card) => {
  if (!card.id) {
    fetch(BASE_URL, {
      method: "POST",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    }).then((res) => {
      if (res.ok) {
        alert("Saved!");
      }
    });
  } else {
    fetch(BASE_URL + card.id, {
      method: "PUT",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(card),
    }).then((res) => {
      if (res.ok) {
        alert("Saved!");
      }
    });
  }
};
