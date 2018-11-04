import replace from 'rollup-plugin-replace';

export default  {

  plugins: [
    replace({
      ENVIRONMENT: JSON.stringify('production')
    }),
    require('rollup-plugin-replace')({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-uglify')(),
  ]
};
