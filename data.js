
const bear = {
    id: 'bear',
    title: 'explore the bear cave',
    map: {
        top: '29%',
        right: '41%'
    },
    prerequisites: ['water'],
    image: 'scary-bear.png',
    description: `
        You enter the bear cave to explore and lo and behold there is a bear! It's a hairy bear AND a scary bear
    `,
    choices: [{
        id: 'roll',
        description: 'drop to the ground, roll into a ball, and play dead',
        result: `
            You probably heard this was a good idea, but sadly rolling into ball and playing dead is a rumor that bears started. Lucky for you this bear is scary but also mostly nice so they just slightly mauled you, felt bad about it, and sent you on your way with some gold they found in the park (bears have no use for gold).
        `,
        hp: -25,
        gold: 10
    }, {
        id: 'run',
        description: 'Make a hasty, retreat from his lair',
        result: `
            You made it safely! And can later describe this encounter to friends with adjectives which I guess is like social gold. But also you trip and skin your knee a bit on the way out.
        `,
        hp: -2,
        gold: 0
    }, {
        id: 'talk',
        description: 'Compliment the bear on their cave',
        result: `
            The bear is super stoked that you noticed the effort they put into their home. You stay and chat for a bit and then you say you best get going because its getting late. The bear offers up some gold they found in the park as a parting gift.
        `,
        hp: 0,
        gold: 10
    }]
};

const water = {
    id: 'water-hazard',
    title: 'The bridge is out at the river and its pretty wild',
    map: {
        top: '40%',
        left: '37%'
    },
    image: 'river.png',
    description: `
        You come to a bridge crossing over the Bow river, but the bridge has collapsed! You know you have to get to the other side to meet your friends.
    `,
    choices: [{
        id: 'ford',
        description: 'Try to ford the river',
        result: `
            You are a pretty good swimmer so you think youll just wade and then swim across. It starts out okay, but the current is REALLY strong and it's a fight to get across. You make it! But you are super tired which I guess affects your hp.
        `,
        hp: -15,
        gold: 0
    }, {
        id: 'walk',
        description: 'walk along the river until you find another bridge.',
        result: `
           You walk along the river for another few miles until you come to another bridge. BUT THIS BRIDGE HAS A TROLL! But its cool, they only want like 10 gold or maybe just whatever gold you have now with interest later. You pay the troll and are on your way.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'boat',
        description: 'Try and make a raft out of the wood thats left from the bridge',
        result: `
           You did well in shop class, so you could probably make a raft. You start digging through the wood and tying things together with dental floss in your pocket. You make a pretty sick raft if I do say so, and find like 20 gold in the bridge wreckage. Happily you sail across the river.
        `,
        hp: 0,
        gold: 20
    }]
};

const path = {
    id: 'path',
    title: 'A fork in the road',
    map: {
        top: '60%',
        left: '65%'
    },
    prerequisites: ['water'],
    image: 'fork.png',

    description: `The reliable path you are following suddenly forks off in three different directions`,
    choices: [{
        id: 'left',
        description: 'Go left',
        result: 'You take the left trail and it is actually a passage way throught time and space. You see the dinosaurs, some historical peeps and come out feeling MUCH healthier and probably richer? You also cut a few miles off of your hike!',
        hp: 20,
        gold: 20
    }, {
        id: 'middle',
        description: 'You go straight ahead',
        result: 'Theres some reaaaal blair witch shit going on on this path. Its scary. Its a bummer. You lose a bunch of gold, you lose your mind, and nobody sees you again. This is the sad scary ending.',
        hp: -100,
        gold: -30
    }, {
        id: 'right',
        description: 'You go right',
        result: 'The path to the right isnt so bad, but you trip a couple times and twist your ankle so thats a bummer.',
        hp: -10,
        gold: 0
    }]
};

const quests = [
    bear,
    path,
    water,
];
export default quests;