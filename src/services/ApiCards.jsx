export const getCards = () => {
return fetch("https://6872278c76a5723aacd3cbb3.mockapi.io/api/v1/tarot")
    .then((res) => res.json())
    .catch((error) => {
        console.error("Error loading cards:", error);
        return [];
});
};
