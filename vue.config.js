module.exports = {
    publicPath: '/SimuladorModeloOsi/',

    chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = 'Simulador modelo OSI';
              return args;
          })
  }
  ,publicPath: './'
}