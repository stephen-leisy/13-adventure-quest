// IMPORT MODULES under test here:
// import { example } from '../example.js';
import questData from '../data.js';
import { findById } from '../quests/quests-utils.js';
import { resetUserProfile } from '../results/results-utils.js';
import { getUserStats, setUserStats, userHealth } from '../utils.js';

const test = QUnit.test;

test('should set user stats to local storage and use function to pull them back', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userStats = { name: 'steph', character: 'racoon', hp: 48, gold: 0, win: 1, completed: { bear: 'bear' } };
    localStorage.setItem('USER', JSON.stringify(userStats));
    // const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getUserStats();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, userStats);
});

test('should prove that function pushes stats to local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userStats = { name: 'steph', character: 'racoon', hp: 48, gold: 0, win: 1, completed: { bear: 'bear' } };
    const setStats = localStorage.setItem('USER', JSON.stringify(userStats));
    // const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = setUserStats(userStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, setStats);
});

test('should replace USER value in local storage with an empty array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const newUser = [];
    const userStats = { name: 'steph', character: 'racoon', hp: 48, gold: 0, win: 1, completed: { bear: 'bear' } };

    const expected = ('USER', newUser);
    // const expected = true;

    localStorage.setItem('USER', userStats);
    resetUserProfile();
    const actual = JSON.parse(localStorage.getItem('USER'));

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should take in stats and produce a string', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const userStats = { name: 'steph', character: 'racoon', hp: 48, gold: 0, win: 1, completed: { bear: 'bear' } };
    const expected = `steph the racoon: HP 48 GOLD 0`;
    // const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = userHealth(userStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('should locate an object based on its id', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const expected = {
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

    // const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(questData, 'bear');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

