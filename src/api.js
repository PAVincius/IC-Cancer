export const login = credentials =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: {
          token: '123456',
          user: {
            username: 'Bruno',
            password: '1234',
          },
        },
      })
    }, 3000)
  })