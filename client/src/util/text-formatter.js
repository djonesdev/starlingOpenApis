export function formatDob(dob = '') {
    const matches = dob.replace(/\D/g, '').match(/(\d{0,2})?(\d{0,2})?(\d{0,4})?/)
    return matches
      ? matches
          .slice(1, 4)
          .filter(Boolean)
          .join('-')
      : ''
  }