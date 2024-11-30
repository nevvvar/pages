document.addEventListener("DOMContentLoaded", () => {
    const facts = [
        "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
        "A day on Venus is longer than a year on Venus. It takes 243 Earth days to rotate once, but only 225 Earth days to orbit the sun.",
        "Bananas are berries, but strawberries are not. In botanical terms, a berry is a fruit produced from the ovary of a single flower.",
        "There are more possible iterations of a game of chess than there are atoms in the known universe.",
        "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
        "A flock of crows is called a murder. The term likely originates from the dark associations and myths surrounding crows.",
        "Wombat poop is cube-shaped. This unique shape helps it mark its territory without the poop rolling away.",
        "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion of the iron.",
        "Humans share approximately 60% of their DNA with bananas. This similarity is due to the basic cellular processes shared across living organisms.",
        "Sharks have been around longer than trees. Sharks first appeared around 400 million years ago, while trees appeared around 350 million years ago."
    ];

    const button = document.getElementById("factButton");
    button.addEventListener("click", () => {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        alert(randomFact);
    });
});
