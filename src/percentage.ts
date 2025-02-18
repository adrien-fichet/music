function percentage(listened: number, total: number, decimals = 0): number {
  return Math.floor((listened / total) * 100 * 10 ** decimals) / 10 ** decimals
}

function percentage_class(listened: number, total: number): string {
  const percent = percentage(listened, total)
  if (percent === 100) {
    return "percent-eq-100"
  } else if (percent < 25) {
    return "percent-lt-25"
  } else if (percent < 50) {
    return "percent-lt-50"
  } else if (percent < 75) {
    return "percent-lt-75"
  } else {
    return "percent-lt-100"
  }
}

export { percentage, percentage_class }
