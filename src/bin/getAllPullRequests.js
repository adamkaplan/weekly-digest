
module.exports = async (context, {owner, repo}) => {
  // method returns all the pull requests
  console.log('In getAllPullRequests.js...')
  let pullRequests = await context.github.paginate(
    context.github.pulls.list.endpoint.merge(
        context.repo({ state: 'all' })
    )
  )
  return pullRequests
}
