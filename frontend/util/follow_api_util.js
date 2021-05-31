
export const createFollow = (friendship) => {
    return $.ajax({
        url: "/api/friendships",
        method: "POST",
        data: { friendship }
    })
}

export const deleteFollow = (follower_id, followed_id) => {
    $.ajax ({
                url: "/api/friendships",
                method: "DELETE",
                data: {
                    follower_id: follower_id,
                    followed_id: followed_id
                }
            })
}