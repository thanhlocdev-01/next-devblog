export function discussionGql(ghDiscussionIdCategoryId: string | undefined ) {
    return `{
        repository(name: "next-devblog", owner: "thanhlocdev-01") {
          discussions(first: 10, categoryId: "${ghDiscussionIdCategoryId}") {
            nodes {
              title
              url
              number
              bodyHTML
              bodyText
              createdAt
              lastEditedAt
              author {
                login
                url
                avatarUrl
              }
              labels(first: 100) {
                nodes {
                  name
                }
              }
            }
          }
        }
      }`;
}

// Single Post
export function discussionDetailGql(postId: number | undefined) {
    return `{
        repository(name: "next-devblog", owner: "thanhlocdev-01") {
            discussion(number: ${postId}) {
                title
                bodyHTML
                createdAt
                author {
                  login
                  url
                  avatarUrl
                }
            }
          }
    }`
}