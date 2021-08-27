function findPageToShow(isLoggedIn, isExistingUser) {
  if (isLoggedIn) return `profile`;
  else return (isExistingUser) ? `login` : `signup`;
}
