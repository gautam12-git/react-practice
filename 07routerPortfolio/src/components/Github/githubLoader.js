export const gitHubInfo = async () => {
  const response = await fetch('https://api.github.com/users/gautam12-git')
  if (!response.ok) throw new Error('Failed to fetch GitHub data')
  return response.json()
}