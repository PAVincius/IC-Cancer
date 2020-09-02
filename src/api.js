export const login = credentials =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          token: '123456',
          user: {
            name: 'Bruno',
            senha: '1234',
          },
        },
      })
    }, 3000)
  })