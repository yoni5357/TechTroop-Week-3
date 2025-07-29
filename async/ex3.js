async function getAll(query) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${query}`);
    if(!response.ok){
        throw new Error(`Could'nt fetch all ${query}`);
    }
    const ret = await response.json();
    return ret;
}

async function createDashboard() {
    const promises = [];
    promises.push(getAll('users'));
    promises.push(getAll('posts'));
    promises.push(getAll('comments'));

    const results =  await Promise.all(promises);

    return {
        'summery': getSummery(results),
        'topUsers': getTopUsers(results),
        'recentPosts': getRecentPosts(results[1], results[1].length)
    }
}

function getSummery(results){
    let totalUsers = results[0].length;
    let totalPosts = results[1].length;
    let totalComments = results[2].length;

    let avgPostsPerUser = totalPosts / totalUsers;
    let avgCommentsPerPost = totalComments / totalPosts;

    return {
        'totalUsers' : totalUsers,
        'totalPosts': totalPosts,
        'totalComments': totalComments,
        'avgPostsPerUser': avgPostsPerUser,
        'avgCommentsPerPost': avgCommentsPerPost
    }
}

function getRecentPosts(posts, postCount){
    return posts.filter(post => post.id > postCount - 5);
}

function getTopUsers(results){
    const postsPerUserId = getPostsByUserId(results[1]);
    const sortedIds = Object.keys(postsPerUserId).sort((curr, next) =>{
        postsPerUserId[next].length - postsPerUserId[curr].length;
    })

    const users = []
    for(let i = 0; i < 3; i++){
        let user = sortedIds[i];
        let userName = results[0][user].name
        let postCount = postsPerUserId[user].length
        let commentCount = getCommentCountByPostId(postsPerUserId[user], results[2])
        users.push({"name": userName,
                    "postCount": postCount,
                    "commentCount": commentCount});
    }
    return users;
}

function getPostsByUserId(posts) {
    const userIds = {}
    for (let post of posts) {
        if (post.userId in userIds){
            userIds[post.userId].push(post.id);
        } 
        else {
            userIds[post.userId] = [post.id];
        }
    }
    return userIds;
}

function getCommentCountByPostId(postIds, comments){
    let totalCount = 0;
    for(let id of postIds){
        const commentCount = comments.filter(comment => comment.postId === parseInt(id)).length;
        totalCount += commentCount;
    }
    return totalCount;
}

createDashboard().then(console.log)
