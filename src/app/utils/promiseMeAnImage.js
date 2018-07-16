const promiseMeAnImage = src => new Promise(
  (resolve, reject) => {
    const img = new Image()

    img.onload = () => resolve(img)
    img.onerror = () => reject(img)

    img.src = src
  }
)

export default promiseMeAnImage
