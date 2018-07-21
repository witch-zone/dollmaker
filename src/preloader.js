import promiseMeAnImage from './app/utils/promiseMeAnImage'

const showApp = () => setTimeout(
  () => {
    document.getElementById('💭').classList.add('‼️')
    document.getElementById('✨').classList.add('‼️')
  }, 666,
)

const preloader = () => (
  Promise.all([
    promiseMeAnImage('assets/wardrobe-1x.png'),
  ]).then(showApp)
)

export default preloader
