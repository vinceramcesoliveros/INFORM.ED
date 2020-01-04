export const accountHeader = (key: Array<string>, accounts: any) => {
  return key.map((element, index) => {
    const newElement = accounts[index]
    if (typeof newElement[element] !== 'object') {
      return {
        text: element ? element : '',
        value: element ? element : ''
      }
    }
    return {
      text: '',
      value: ''
    }
  })
}
