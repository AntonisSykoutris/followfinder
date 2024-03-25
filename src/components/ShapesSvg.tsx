import * as React from 'react';

export default function ShapesSvg(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 800 800'
      {...props}
    >
      <defs>
        <symbol id='b' viewBox='0 0 145 145'>
          <circle cx={72.5} cy={72.5} r={72.5} />
        </symbol>
        <symbol id='g' viewBox='0 0 133 116'>
          <path d='M59.749 10.251c-13.669-13.668-35.83-13.668-49.498 0-13.668 13.669-13.668 35.83 0 49.498L59.75 10.25ZM66.5 66.5 41.751 91.249 66.5 115.997l24.749-24.748L66.5 66.5Zm56.249-6.751c13.668-13.669 13.668-35.83 0-49.498-13.669-13.668-35.83-13.668-49.498 0L122.75 59.75Zm-112.498 0 31.5 31.5L91.25 41.75l-31.5-31.5L10.25 59.75Zm80.998 31.5 31.5-31.5L73.251 10.25l-31.5 31.5L91.25 91.25Z' />
        </symbol>
        <symbol id='a' viewBox='0 0 139 124'>
          <path
            fillRule='evenodd'
            d='M70.164 15.092C54.61.765 37.83-2.108 24.404 2.826 10.38 7.98.763 21.46 1 37.061c.107 7.027 2.862 13.732 7.004 20.2 4.14 6.464 9.849 12.971 16.246 19.641 3.82 3.985 7.887 8.032 12.077 12.201C46.36 99.09 57.102 109.78 66.877 122a4 4 0 0 0 6.966-1.387c9.577-11.748 20.033-22.073 29.816-31.735 4.19-4.137 8.256-8.153 12.078-12.106 6.396-6.618 12.106-13.076 16.247-19.491 4.144-6.42 6.905-13.082 7.012-20.07.237-15.512-9.399-28.89-23.411-33.999-13.32-4.857-29.954-2.086-45.42 11.88Zm-3.735 7.492C52.128 8.449 37.683 6.469 27.163 10.335 16.286 14.332 8.815 24.782 9 36.94c.075 4.985 2.037 10.224 5.741 16.007 3.707 5.788 8.975 11.842 15.283 18.42 3.58 3.732 7.498 7.632 11.6 11.715 9.047 9.007 18.991 18.905 28.178 29.867 9.3-11.068 19.404-21.047 28.584-30.114l.001-.001c4.102-4.05 8.019-7.92 11.598-11.622 6.307-6.525 11.573-12.53 15.278-18.27 3.703-5.736 5.658-10.924 5.734-15.853.184-12.028-7.267-22.391-18.153-26.36-10.71-3.906-25.472-1.801-40.002 12.866a4 4 0 0 1-6.413-1.01Z'
            clipRule='evenodd'
          />
        </symbol>
        <symbol id='f' viewBox='0 0 87 168'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={14}
            d='m12 12 31.255 18.075c16.41 9.49 20.014 31.632 7.46 45.837L36.33 92.188c-12.569 14.221-8.94 36.392 7.506 45.864L75 156'
          />
        </symbol>
        <symbol id='h' viewBox='0 0 145 145'>
          <circle cx={72.5} cy={72.5} r={61.5} fill='none' strokeWidth={22} />
        </symbol>
        <symbol id='d' viewBox='0 0 185 109'>
          <path
            strokeLinecap='round'
            strokeWidth={33}
            d='M168 16.5C168 58.197 134.197 92 92.5 92S17 58.197 17 16.5'
          />
        </symbol>
        <filter id='c' width='400%' height='400%' x='-100%' y='-100%'>
          <feGaussianBlur in='SourceGraphic' stdDeviation={1} />
        </filter>
        <filter id='e' width='400%' height='400%' x='-100%' y='-100%'>
          <feGaussianBlur in='SourceGraphic' stdDeviation={2} />
        </filter>
        <filter id='i' width='400%' height='400%' x='-100%' y='-100%'>
          <feGaussianBlur in='SourceGraphic' stdDeviation={4} />
        </filter>
      </defs>
      <use
        xlinkHref='#a'
        width={12.277}
        fill='#dc2743'
        opacity={0.91}
        transform='rotate(-10.735 2085.07 -3450.921)'
      />
      <use
        xlinkHref='#b'
        width={32.102}
        fill='#e6683c'
        filter='url(#c)'
        opacity={0.451}
        transform='rotate(-16.979 854.002 -396.45)'
      />
      <use
        xlinkHref='#d'
        width={61.159}
        fill='none'
        stroke='#dc2743'
        filter='url(#e)'
        opacity={0.299}
        transform='rotate(21.81 468.118 1097.931)'
      />
      <use
        xlinkHref='#f'
        width={7.137}
        fill='none'
        stroke='#cc2366'
        opacity={0.934}
        transform='rotate(37.293 -206.644 1678.26)'
      />
      <use
        xlinkHref='#f'
        width={27.399}
        fill='none'
        stroke='#dc2743'
        filter='url(#c)'
        opacity={0.462}
        transform='rotate(42.091 -343.002 908.45)'
      />
      <use
        xlinkHref='#g'
        width={29.835}
        fill='#dc2743'
        filter='url(#e)'
        opacity={0.252}
        transform='rotate(25.629 -754.374 664.086)'
      />
      <use
        xlinkHref='#f'
        width={8.859}
        fill='none'
        stroke='#cc2366'
        opacity={0.916}
        transform='rotate(9.926 -1891.302 4695.212)'
      />
      <use
        xlinkHref='#b'
        width={14.088}
        fill='#bc1888'
        opacity={0.765}
        transform='rotate(-38.999 616.382 -531.23)'
      />
      <use
        xlinkHref='#d'
        width={11.731}
        fill='none'
        stroke='#e6683c'
        opacity={0.762}
        transform='rotate(27.039 38.067 2050.52)'
      />
      <use
        xlinkHref='#h'
        width={8.44}
        fill='none'
        stroke='#cc2366'
        opacity={0.877}
        transform='rotate(-40.531 771.942 -522.058)'
      />
      <use
        xlinkHref='#f'
        width={17.214}
        fill='none'
        stroke='#e6683c'
        opacity={0.685}
        transform='rotate(6.928 -400.617 6403.795)'
      />
      <use
        xlinkHref='#h'
        width={15.53}
        fill='none'
        stroke='#f09433'
        opacity={0.717}
        transform='rotate(5.127 -4022.178 6284.507)'
      />
      <use
        xlinkHref='#b'
        width={23.628}
        fill='#cc2366'
        filter='url(#c)'
        opacity={0.577}
        transform='rotate(-.116 135396.555 -190083.23)'
      />
      <use
        xlinkHref='#h'
        width={42.574}
        fill='none'
        stroke='#cc2366'
        filter='url(#i)'
        opacity={0.241}
        transform='rotate(-2.361 -1492.413 -3984.866)'
      />
      <use
        xlinkHref='#h'
        width={11.663}
        fill='none'
        stroke='#bc1888'
        opacity={0.801}
        transform='rotate(29.115 -81.592 1854.656)'
      />
      <use
        xlinkHref='#d'
        width={29.242}
        fill='none'
        stroke='#e6683c'
        filter='url(#c)'
        opacity={0.569}
        transform='rotate(7.414 -810.63 3897.417)'
      />
      <use
        xlinkHref='#g'
        width={43.56}
        fill='#cc2366'
        filter='url(#i)'
        opacity={0.198}
        transform='rotate(12.772 -561.863 566.067)'
      />
      <use
        xlinkHref='#d'
        width={39.086}
        fill='none'
        stroke='#e6683c'
        filter='url(#c)'
        opacity={0.452}
        transform='rotate(15.703 -321.361 1556.98)'
      />
      <use
        xlinkHref='#h'
        width={14.059}
        fill='none'
        stroke='#dc2743'
        opacity={0.663}
        transform='rotate(36.074 295.26 1618.332)'
      />
      <use
        xlinkHref='#h'
        width={31.193}
        fill='none'
        stroke='#dc2743'
        filter='url(#c)'
        opacity={0.496}
        transform='rotate(9.897 -403.678 2619.319)'
      />
      <use
        xlinkHref='#d'
        width={8.611}
        fill='none'
        stroke='#e6683c'
        opacity={0.931}
        transform='rotate(-36.62 900.859 -570.002)'
      />
      <use
        xlinkHref='#h'
        width={27.36}
        fill='none'
        stroke='#dc2743'
        filter='url(#c)'
        opacity={0.577}
        transform='rotate(-.82 -530.324 -48208.899)'
      />
      <use
        xlinkHref='#b'
        width={5.262}
        fill='#dc2743'
        opacity={0.95}
        transform='rotate(24.96 -508.902 2284.84)'
      />
      <use
        xlinkHref='#h'
        width={24.957}
        fill='none'
        stroke='#e6683c'
        opacity={0.671}
        transform='rotate(-27.053 782.43 -500.655)'
      />
      <use
        xlinkHref='#d'
        width={22.32}
        fill='none'
        stroke='#cc2366'
        filter='url(#c)'
        opacity={0.505}
        transform='rotate(-21.991 844.395 -276.02)'
      />
      <use
        xlinkHref='#d'
        width={21.914}
        fill='none'
        stroke='#bc1888'
        filter='url(#c)'
        opacity={0.638}
        transform='rotate(-31.165 452.176 -884.339)'
      />
      <use
        xlinkHref='#b'
        width={5.635}
        fill='#dc2743'
        opacity={0.954}
        transform='rotate(15.283 -1033.423 3408.1)'
      />
      <use
        xlinkHref='#h'
        width={10.305}
        fill='none'
        stroke='#e6683c'
        opacity={0.916}
        transform='rotate(41.132 -87.792 1548.253)'
      />
      <use
        xlinkHref='#b'
        width={41.269}
        fill='#f09433'
        filter='url(#e)'
        opacity={0.282}
        transform='rotate(33.975 679.297 1065.334)'
      />
      <use
        xlinkHref='#h'
        width={31.109}
        fill='none'
        stroke='#bc1888'
        filter='url(#c)'
        opacity={0.489}
        transform='rotate(-32.273 292.67 -313.37)'
      />
      <use
        xlinkHref='#d'
        width={18.248}
        fill='none'
        stroke='#dc2743'
        opacity={0.719}
        transform='rotate(-34.57 702.097 -346.477)'
      />
      <use
        xlinkHref='#f'
        width={41.927}
        fill='none'
        stroke='#dc2743'
        filter='url(#i)'
        opacity={0.168}
        transform='rotate(19.62 1235.854 1428.081)'
      />
      <use
        xlinkHref='#f'
        width={19.648}
        fill='none'
        stroke='#cc2366'
        filter='url(#c)'
        opacity={0.598}
        transform='rotate(-39.211 682.622 17.505)'
      />
      <use
        xlinkHref='#d'
        width={50.365}
        fill='none'
        stroke='#e6683c'
        filter='url(#i)'
        opacity={0.223}
        transform='rotate(-27.01 -305.339 -409.622)'
      />
      <use
        xlinkHref='#h'
        width={20.723}
        fill='none'
        stroke='#e6683c'
        opacity={0.77}
        transform='rotate(21.642 -306.153 2153.477)'
      />
      <use
        xlinkHref='#a'
        width={10.333}
        fill='#f09433'
        opacity={0.897}
        transform='rotate(-42.723 775.122 -440.41)'
      />
      <use
        xlinkHref='#f'
        width={10.131}
        fill='none'
        stroke='#f09433'
        opacity={0.799}
        transform='rotate(-39.6 835.149 -233.266)'
      />
      <use
        xlinkHref='#a'
        width={10.646}
        fill='#f09433'
        opacity={0.826}
        transform='rotate(-36.512 896.622 -350.538)'
      />
      <use
        xlinkHref='#d'
        width={16.006}
        fill='none'
        stroke='#e6683c'
        opacity={0.742}
        transform='rotate(10.808 -1602.768 3420.895)'
      />
      <use
        xlinkHref='#g'
        width={14.881}
        fill='#dc2743'
        opacity={0.728}
        transform='rotate(-44.048 540.012 -440.34)'
      />
      <use
        xlinkHref='#f'
        width={18.385}
        fill='none'
        stroke='#f09433'
        opacity={0.722}
        transform='rotate(-44.068 546.953 -260.46)'
      />
      <use
        xlinkHref='#f'
        width={12.836}
        fill='none'
        stroke='#cc2366'
        opacity={0.827}
        transform='rotate(-20.442 1210.714 -1217.372)'
      />
      <use
        xlinkHref='#h'
        width={39.565}
        fill='none'
        stroke='#cc2366'
        filter='url(#e)'
        opacity={0.355}
        transform='rotate(-3.254 1196.112 -3645.39)'
      />
      <use
        xlinkHref='#g'
        width={8.172}
        fill='#bc1888'
        opacity={0.919}
        transform='rotate(9.302 -1567.557 5383.78)'
      />
      <use
        xlinkHref='#g'
        width={37.668}
        fill='#cc2366'
        filter='url(#c)'
        opacity={0.538}
        transform='rotate(41.886 -58.59 976.378)'
      />
      <use
        xlinkHref='#d'
        width={12.635}
        fill='none'
        stroke='#dc2743'
        opacity={0.881}
        transform='rotate(-42.079 759.41 -408.783)'
      />
      <use
        xlinkHref='#f'
        width={21.544}
        fill='none'
        stroke='#bc1888'
        filter='url(#c)'
        opacity={0.557}
        transform='rotate(20.979 -836.165 1524.903)'
      />
      <use
        xlinkHref='#h'
        width={5.876}
        fill='none'
        stroke='#bc1888'
        opacity={0.968}
        transform='rotate(-13.519 1983.238 -2676.676)'
      />
      <use
        xlinkHref='#f'
        width={24.038}
        fill='none'
        stroke='#dc2743'
        filter='url(#e)'
        opacity={0.403}
        transform='rotate(28.701 -567.163 951.328)'
      />
      <use
        xlinkHref='#d'
        width={32.048}
        fill='none'
        stroke='#cc2366'
        filter='url(#e)'
        opacity={0.373}
        transform='rotate(-38.509 352.032 190.756)'
      />
      <use
        xlinkHref='#f'
        width={16.437}
        fill='none'
        stroke='#dc2743'
        opacity={0.764}
        transform='rotate(1.349 -11345.076 25672.349)'
      />
      <use
        xlinkHref='#f'
        width={65.626}
        fill='none'
        stroke='#dc2743'
        filter='url(#i)'
        opacity={0.072}
        transform='rotate(-23.079 -367.025 227.169)'
      />
      <use
        xlinkHref='#b'
        width={8.743}
        fill='#e6683c'
        opacity={0.936}
        transform='rotate(16.489 -889.882 3141.285)'
      />
      <use
        xlinkHref='#d'
        width={25.666}
        fill='none'
        stroke='#cc2366'
        filter='url(#c)'
        opacity={0.508}
        transform='rotate(33.463 455.974 1439.767)'
      />
      <use
        xlinkHref='#f'
        width={28.188}
        fill='none'
        stroke='#dc2743'
        filter='url(#e)'
        opacity={0.418}
        transform='rotate(34.228 -317.459 889.659)'
      />
      <use
        xlinkHref='#d'
        width={14.013}
        fill='none'
        stroke='#cc2366'
        opacity={0.828}
        transform='rotate(42.018 86.67 1505.52)'
      />
      <use
        xlinkHref='#f'
        width={21.629}
        fill='none'
        stroke='#e6683c'
        filter='url(#c)'
        opacity={0.489}
        transform='rotate(37.3 554.423 1473.75)'
      />
      <use
        xlinkHref='#d'
        width={17.116}
        fill='none'
        stroke='#dc2743'
        opacity={0.72}
        transform='rotate(-37.1 728.569 -232.543)'
      />
      <use
        xlinkHref='#h'
        width={14.876}
        fill='none'
        stroke='#cc2366'
        opacity={0.806}
        transform='rotate(11.969 -1368.494 3461.708)'
      />
      <use
        xlinkHref='#f'
        width={14.981}
        fill='none'
        stroke='#dc2743'
        opacity={0.834}
        transform='rotate(-38.663 723.576 -524.755)'
      />
      <use
        xlinkHref='#b'
        width={10.266}
        fill='#cc2366'
        opacity={0.878}
        transform='rotate(-9.417 2344.521 -3662.815)'
      />
      <use
        xlinkHref='#h'
        width={11.763}
        fill='none'
        stroke='#cc2366'
        opacity={0.882}
        transform='rotate(4.651 -4086.96 8996.418)'
      />
      <use
        xlinkHref='#h'
        width={6.122}
        fill='none'
        stroke='#cc2366'
        opacity={0.98}
        transform='rotate(-35.944 997.865 -603.062)'
      />
      <use
        xlinkHref='#f'
        width={6.805}
        fill='none'
        stroke='#e6683c'
        opacity={0.973}
        transform='rotate(23.603 -496.664 2474.492)'
      />
      <use
        xlinkHref='#a'
        width={52.445}
        fill='#dc2743'
        filter='url(#i)'
        opacity={0.144}
        transform='rotate(-30.344 -4.025 331.446)'
      />
      <use
        xlinkHref='#h'
        width={31.764}
        fill='none'
        stroke='#bc1888'
        filter='url(#c)'
        opacity={0.562}
        transform='rotate(11.072 175.145 3299.981)'
      />
      <use
        xlinkHref='#g'
        width={43.659}
        fill='#f09433'
        filter='url(#e)'
        opacity={0.418}
        transform='rotate(34.82 603.91 1336.607)'
      />
      <use
        xlinkHref='#d'
        width={29.654}
        fill='none'
        stroke='#cc2366'
        filter='url(#c)'
        opacity={0.55}
        transform='rotate(18.547 98.615 1949.888)'
      />
      <use
        xlinkHref='#h'
        width={10.745}
        fill='none'
        stroke='#f09433'
        opacity={0.859}
        transform='rotate(30.164 -346.238 1803.803)'
      />
      <use
        xlinkHref='#h'
        width={6.436}
        fill='none'
        stroke='#e6683c'
        opacity={0.952}
        transform='rotate(-31.209 1031.165 -806.853)'
      />
      <use
        xlinkHref='#d'
        width={41.059}
        fill='none'
        stroke='#bc1888'
        filter='url(#e)'
        opacity={0.411}
        transform='rotate(27.486 327.018 1193.844)'
      />
      <use
        xlinkHref='#b'
        width={34.896}
        fill='#f09433'
        filter='url(#e)'
        opacity={0.397}
        transform='rotate(-36.808 58.685 -494.47)'
      />
      <use
        xlinkHref='#h'
        width={13.443}
        fill='none'
        stroke='#dc2743'
        opacity={0.86}
        transform='rotate(-24.387 1039.514 -1073.65)'
      />
      <use
        xlinkHref='#h'
        width={23.343}
        fill='none'
        stroke='#cc2366'
        filter='url(#c)'
        opacity={0.501}
        transform='rotate(-.156 124911.415 -107350.953)'
      />
      <use
        xlinkHref='#d'
        width={46.322}
        fill='none'
        stroke='#cc2366'
        filter='url(#i)'
        opacity={0.246}
        transform='rotate(-12.829 -1182.605 -2941.03)'
      />
      <use
        xlinkHref='#h'
        width={17.233}
        fill='none'
        stroke='#f09433'
        opacity={0.7}
        transform='rotate(37.769 -241.999 1298.165)'
      />
      <use
        xlinkHref='#b'
        width={22.832}
        fill='#bc1888'
        opacity={0.675}
        transform='rotate(16.679 -274.723 2401.693)'
      />
      <use
        xlinkHref='#h'
        width={6.72}
        fill='none'
        stroke='#dc2743'
        opacity={0.937}
        transform='rotate(-40.644 850.989 -485.413)'
      />
      <use
        xlinkHref='#g'
        width={29.425}
        fill='#cc2366'
        filter='url(#e)'
        opacity={0.42}
        transform='rotate(39.724 631.505 1334.255)'
      />
      <use
        xlinkHref='#f'
        width={12.792}
        fill='none'
        stroke='#e6683c'
        opacity={0.775}
        transform='rotate(13.209 -1217.117 3055.215)'
      />
      <use
        xlinkHref='#f'
        width={6.084}
        fill='none'
        stroke='#dc2743'
        opacity={0.989}
        transform='rotate(40.108 -137.239 1678.715)'
      />
      <use
        xlinkHref='#b'
        width={46.328}
        fill='#e6683c'
        filter='url(#i)'
        opacity={0.22}
        transform='rotate(-15.004 -1028.67 -1951.365)'
      />
      <use
        xlinkHref='#a'
        width={16.894}
        fill='#dc2743'
        opacity={0.674}
        transform='rotate(38.497 -179.72 1238.724)'
      />
      <use
        xlinkHref='#h'
        width={17.319}
        fill='none'
        stroke='#dc2743'
        filter='url(#c)'
        opacity={0.626}
        transform='rotate(-1.717 12875.898 -13339.977)'
      />
      <use
        xlinkHref='#b'
        width={7.004}
        fill='#e6683c'
        opacity={0.966}
        transform='rotate(-27.969 1173.985 -936.266)'
      />
      <use
        xlinkHref='#h'
        width={9.488}
        fill='none'
        stroke='#dc2743'
        opacity={0.85}
        transform='rotate(4.877 -3335.037 8462.966)'
      />
      <use
        xlinkHref='#b'
        width={10.413}
        fill='#e6683c'
        opacity={0.816}
        transform='rotate(13.241 -535.99 3884.427)'
      />
      <use
        xlinkHref='#h'
        width={13.192}
        fill='none'
        stroke='#e6683c'
        opacity={0.765}
        transform='rotate(-34.675 903.698 -301.43)'
      />
      <use
        xlinkHref='#g'
        width={40.648}
        fill='#cc2366'
        filter='url(#e)'
        opacity={0.289}
        transform='rotate(-24.472 417.212 207.728)'
      />
      <use
        xlinkHref='#b'
        width={20.778}
        fill='#dc2743'
        filter='url(#c)'
        opacity={0.635}
        transform='rotate(-11.552 604.695 -2933.456)'
      />
      <use
        xlinkHref='#h'
        width={67.52}
        fill='none'
        stroke='#e6683c'
        filter='url(#i)'
        opacity={-0.018}
        transform='rotate(-43.146 -352.097 170.035)'
      />
      <use
        xlinkHref='#b'
        width={25.252}
        fill='#dc2743'
        filter='url(#c)'
        opacity={0.549}
        transform='rotate(10.873 -1476.068 2364.503)'
      />
      <use
        xlinkHref='#g'
        width={12.399}
        fill='#bc1888'
        opacity={0.801}
        transform='rotate(-18.081 1210.725 -1446.404)'
      />
      <use
        xlinkHref='#h'
        width={9.465}
        fill='none'
        stroke='#e6683c'
        opacity={0.873}
        transform='rotate(14.675 -1167.387 3191.854)'
      />
      <use
        xlinkHref='#g'
        width={13.135}
        fill='#cc2366'
        opacity={0.834}
        transform='rotate(-8.998 2554.176 -3455.1)'
      />
      <use
        xlinkHref='#h'
        width={13.946}
        fill='none'
        stroke='#cc2366'
        opacity={0.796}
        transform='rotate(21.533 -143.077 2479.736)'
      />
      <use
        xlinkHref='#g'
        width={21.267}
        fill='#e6683c'
        filter='url(#c)'
        opacity={0.609}
        transform='rotate(-34.622 408.588 -820.694)'
      />
      <use
        xlinkHref='#d'
        width={14.421}
        fill='none'
        stroke='#dc2743'
        opacity={0.866}
        transform='rotate(-6.704 2712.24 -5871.056)'
      />
      <use
        xlinkHref='#b'
        width={42.458}
        fill='#dc2743'
        filter='url(#i)'
        opacity={0.086}
        transform='rotate(-14.86 -1158.6 -696.424)'
      />
      <use
        xlinkHref='#b'
        width={20.983}
        fill='#e6683c'
        filter='url(#c)'
        opacity={0.632}
        transform='rotate(21.224 18.684 1976.718)'
      />
      <use
        xlinkHref='#a'
        width={37.599}
        fill='#f09433'
        filter='url(#e)'
        opacity={0.253}
        transform='rotate(22.742 -27.574 732.004)'
      />
      <use
        xlinkHref='#h'
        width={38.873}
        fill='none'
        stroke='#f09433'
        filter='url(#e)'
        opacity={0.346}
        transform='rotate(-15.603 -318.98 -1243.194)'
      />
      <use
        xlinkHref='#b'
        width={21.643}
        fill='#dc2743'
        filter='url(#c)'
        opacity={0.64}
        transform='rotate(34.644 -286.777 1262.392)'
      />
      <use
        xlinkHref='#d'
        width={34.112}
        fill='none'
        stroke='#dc2743'
        filter='url(#e)'
        opacity={0.339}
        transform='rotate(15.596 1322.518 2914.922)'
      />
      <use
        xlinkHref='#h'
        width={4.88}
        fill='none'
        stroke='#f09433'
        opacity={0.955}
        transform='rotate(2.8 -6869.258 16753.136)'
      />
      <use
        xlinkHref='#h'
        width={7.319}
        fill='none'
        stroke='#e6683c'
        opacity={0.921}
        transform='rotate(18.767 -750.03 2773.696)'
      />
      <use
        xlinkHref='#a'
        width={48.949}
        fill='#bc1888'
        filter='url(#e)'
        opacity={0.392}
        transform='rotate(-13.95 216.486 -859.147)'
      />
      <use
        xlinkHref='#f'
        width={17.139}
        fill='none'
        stroke='#cc2366'
        opacity={0.672}
        transform='rotate(37.456 -309.658 1272.324)'
      />
      <use
        xlinkHref='#a'
        width={10.213}
        fill='#bc1888'
        opacity={0.734}
        transform='rotate(-15.785 878.213 -2332.98)'
      />
      <use
        xlinkHref='#h'
        width={9.477}
        fill='none'
        stroke='#cc2366'
        opacity={0.859}
        transform='rotate(-39.957 807.541 -346.532)'
      />
      <use
        xlinkHref='#f'
        width={12.948}
        fill='none'
        stroke='#cc2366'
        opacity={0.795}
        transform='rotate(-6.892 2938.764 -4475.378)'
      />
      <use
        xlinkHref='#a'
        width={14.764}
        fill='#f09433'
        opacity={0.809}
        transform='rotate(24.689 -231.621 2060.434)'
      />
      <use
        xlinkHref='#a'
        width={34.365}
        fill='#bc1888'
        filter='url(#e)'
        opacity={0.322}
        transform='rotate(35.706 718.753 1218.299)'
      />
      <use
        xlinkHref='#b'
        width={9.973}
        fill='#bc1888'
        opacity={0.9}
        transform='rotate(-25.734 1123.267 -976.694)'
      />
      <use
        xlinkHref='#f'
        width={8.354}
        fill='none'
        stroke='#dc2743'
        opacity={0.761}
        transform='rotate(27.155 62.786 2102.808)'
      />
      <use
        xlinkHref='#f'
        width={35.515}
        fill='none'
        stroke='#dc2743'
        filter='url(#i)'
        opacity={0.231}
        transform='rotate(16.48 -882.986 618.361)'
      />
      <use
        xlinkHref='#a'
        width={29.528}
        fill='#cc2366'
        filter='url(#e)'
        opacity={0.339}
        transform='rotate(-44.452 508.123 422.386)'
      />
      <use
        xlinkHref='#b'
        width={20.771}
        fill='#dc2743'
        opacity={0.658}
        transform='rotate(10.273 -835.321 3354.792)'
      />
      <use
        xlinkHref='#g'
        width={32.601}
        fill='#dc2743'
        filter='url(#c)'
        opacity={0.576}
        transform='rotate(26.75 317.164 1722.59)'
      />
      <use
        xlinkHref='#f'
        width={16.361}
        fill='none'
        stroke='#e6683c'
        opacity={0.761}
        transform='rotate(39.847 51.602 1403.757)'
      />
      <use
        xlinkHref='#h'
        width={17.352}
        fill='none'
        stroke='#dc2743'
        opacity={0.756}
        transform='rotate(42.205 113.59 1373.341)'
      />
      <use
        xlinkHref='#b'
        width={38.265}
        fill='#cc2366'
        filter='url(#c)'
        opacity={0.467}
        transform='rotate(28.5 365.953 1352.076)'
      />
      <use
        xlinkHref='#f'
        width={9.909}
        fill='none'
        stroke='#cc2366'
        opacity={0.85}
        transform='rotate(-6.696 2542.31 -6140.76)'
      />
      <use
        xlinkHref='#a'
        width={14.9}
        fill='#cc2366'
        opacity={0.843}
        transform='rotate(-27.239 912.054 -935.174)'
      />
      <use
        xlinkHref='#b'
        width={22.446}
        fill='#cc2366'
        opacity={0.681}
        transform='rotate(-18.366 669.964 -1613.73)'
      />
      <use
        xlinkHref='#d'
        width={31.465}
        fill='none'
        stroke='#dc2743'
        filter='url(#c)'
        opacity={0.493}
        transform='rotate(11.15 630.753 3338.726)'
      />
      <use
        xlinkHref='#a'
        width={12.808}
        fill='#e6683c'
        opacity={0.702}
        transform='rotate(44.55 265.481 1391.828)'
      />
      <use
        xlinkHref='#a'
        width={14.985}
        fill='#dc2743'
        opacity={0.8}
        transform='rotate(6.258 -1569.302 7126.974)'
      />
      <use
        xlinkHref='#g'
        width={16.634}
        fill='#bc1888'
        opacity={0.724}
        transform='rotate(3.222 -2190.918 12763.305)'
      />
      <use
        xlinkHref='#f'
        width={8.931}
        fill='none'
        stroke='#dc2743'
        opacity={0.904}
        transform='rotate(32.068 -292.637 1809.482)'
      />
      <use
        xlinkHref='#h'
        width={10.34}
        fill='none'
        stroke='#e6683c'
        opacity={0.894}
        transform='rotate(34.216 -154.01 1736.461)'
      />
      <use
        xlinkHref='#h'
        width={21.523}
        fill='none'
        stroke='#e6683c'
        filter='url(#c)'
        opacity={0.605}
        transform='rotate(-34.009 566.345 -229.913)'
      />
      <use
        xlinkHref='#f'
        width={28.917}
        fill='none'
        stroke='#dc2743'
        filter='url(#c)'
        opacity={0.498}
        transform='rotate(10.633 874.151 4116.862)'
      />
      <use
        xlinkHref='#d'
        width={7.05}
        fill='none'
        stroke='#dc2743'
        opacity={0.893}
        transform='rotate(-43.218 839.57 -277.267)'
      />
      <use
        xlinkHref='#f'
        width={42.023}
        fill='none'
        stroke='#e6683c'
        filter='url(#e)'
        opacity={0.318}
        transform='rotate(28.055 -418.978 752.398)'
      />
      <use
        xlinkHref='#f'
        width={23.054}
        fill='none'
        stroke='#dc2743'
        filter='url(#c)'
        opacity={0.622}
        transform='rotate(2.965 -4796.95 8967.885)'
      />
      <use
        xlinkHref='#b'
        width={13.889}
        fill='#dc2743'
        opacity={0.758}
        transform='rotate(-42.377 693.33 -175.873)'
      />
      <use
        xlinkHref='#d'
        width={10.687}
        fill='none'
        stroke='#e6683c'
        opacity={0.787}
        transform='rotate(12.521 -459.367 4051.439)'
      />
      <use
        xlinkHref='#h'
        width={64.952}
        fill='none'
        stroke='#dc2743'
        filter='url(#i)'
        opacity={0.152}
        transform='rotate(-43.037 -141.572 75.605)'
      />
      <use
        xlinkHref='#d'
        width={22.311}
        fill='none'
        stroke='#e6683c'
        opacity={0.697}
        transform='rotate(31.242 70.547 1597.169)'
      />
      <use
        xlinkHref='#f'
        width={13.996}
        fill='none'
        stroke='#f09433'
        opacity={0.828}
        transform='rotate(-42.298 706.676 -319.75)'
      />
      <use
        xlinkHref='#h'
        width={7.114}
        fill='none'
        stroke='#e6683c'
        opacity={0.948}
        transform='rotate(-35.366 953.994 -609.083)'
      />
      <use
        xlinkHref='#f'
        width={25.619}
        fill='none'
        stroke='#e6683c'
        filter='url(#c)'
        opacity={0.555}
        transform='rotate(-20.3 266.549 -1730.31)'
      />
      <use
        xlinkHref='#f'
        width={12.07}
        fill='none'
        stroke='#dc2743'
        opacity={0.849}
        transform='rotate(-11.19 2306.144 -2690.463)'
      />
      <use
        xlinkHref='#f'
        width={17.475}
        fill='none'
        stroke='#e6683c'
        opacity={0.722}
        transform='rotate(16.629 -470.763 2480.277)'
      />
      <use
        xlinkHref='#a'
        width={28.804}
        fill='#e6683c'
        filter='url(#c)'
        opacity={0.634}
        transform='rotate(-19.569 540.456 -1353.666)'
      />
      <use
        xlinkHref='#h'
        width={29.205}
        fill='none'
        stroke='#bc1888'
        filter='url(#c)'
        opacity={0.612}
        transform='rotate(-9.547 1038.607 -2574.999)'
      />
    </svg>
  );
}
