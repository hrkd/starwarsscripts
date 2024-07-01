type Episode = {
    title: string;
    number: string;
}

export type Title = {
    ep1: Episode;
    ep2: Episode;
    ep3: Episode;
    ep4: Episode;
    ep5: Episode;
    ep6: Episode;
    // ep7: string;
    // ep8: string;
    // ep9: string;
}

export const TITLE = {
    ep1: {title: "The Phantom Menace", number: "I"},// "Star Wars: Episode  - ",
    ep2: {title: "Attack of the Clones", number: "II"}, //Star Wars: Episode  - 
    ep3: {title: "Revenge of the Sith", number: "III"},   //Star Wars: Episode 
    ep4: {title: "A New Hope", number: "IV"},             //Star Wars: Episode  
    ep5: {title: "The Empire Strikes Back", number: "V"}, //Star Wars: Episode  -
    ep6: {title: "Return of the Jedi", number: "VI"},     //Star Wars: Episode  
    // ep7: "Star Wars: Episode VII - The Force Awakens",
    // ep8: "Star Wars: Episode VIII - The Last Jedi",
    // ep9: "Star Wars: Episode IX - The Rise of Skywalker",
}