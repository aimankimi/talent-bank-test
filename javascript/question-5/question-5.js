
// 5. Try to optimise function generateUsersDetail to reduce time taken.

// ***DO NOT EDIT THIS PART
function randomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const userIds = [];
const userNames = [];
const userPhotos = [];
for (let i = 1; i <= 100000; i++) {
    userIds.push(i);
    userNames.push({ userId: i, name: randomString() });
    userPhotos.push({ userId: i, photo: `${randomString()}.png` });
}
// DO NOT EDIT THIS PART***

function generateUsersDetail(userIds, userNames, userPhotos) {
    const result = [];

    userIds.forEach((userId) => {
        result.push({
            userId,
            fullName: userNames?.find(uD => uD.userId === userId)?.name || '',
            photo: userPhotos?.find(uD => uD.userId === userId)?.photo || '',
        })
    })
    return result;
}

function generateUsersDetail(userIds, userNames, userPhotos) {
    const result = [];

    const nameMap = {};
    const photoMap = {};

    userNames.forEach(user => {
        nameMap[user.userId] = user.name;
    });

    userPhotos.forEach(user => {
        photoMap[user.userId] = user.photo;
    });

    userIds.forEach((userId) => {
        result.push({
            userId,
            fullName: nameMap[userId] || '',
            photo: photoMap[userId] || '',
        });
    });

    return result;
}

// ***DO NOT EDIT THIS PART
console.time('generateUsersDetail');
generateUsersDetail(userIds, userNames, userPhotos);
console.timeEnd('generateUsersDetail');
// DO NOT EDIT THIS PART***