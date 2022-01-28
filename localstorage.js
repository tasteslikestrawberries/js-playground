 const myArr=[1,2,3,4,5]

  const tryLocalStorage = () => {
    localStorage.setItem('animal','cat')
    localStorage.setItem('arrKey', JSON.stringify(this.myArr))
    console.log(localStorage.getItem('animal'));
    console.log(localStorage.getItem('arrKey'))
  }

  tryLocalStorage()